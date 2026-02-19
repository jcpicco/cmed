package com.cmed.app;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.URI;
import java.net.URISyntaxException;

@SpringBootApplication
public class AppApplication {

    private static JTextArea logTextArea;
    private static JButton openBrowserButton;
    private static JFrame frame;

    public static void main(String[] args) {
        // Create GUI
        createAndShowGUI();

        // Redirect System.out and System.err to the GUI
        redirectSystemStreams();

        // Run Spring Boot in a separate thread to keep UI responsive
        new Thread(() -> {
            try {
                new SpringApplicationBuilder(AppApplication.class)
                        .headless(false)
                        .profiles("portable")
                        .run(args);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
    }

    private static void createAndShowGUI() {
        // Ensure GUI is created on Event Dispatch Thread
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            } catch (Exception e) {
                // Ignore
            }

            frame = new JFrame("CMED App Launcher");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(800, 600);
            frame.setLayout(new BorderLayout());

            // Log Area
            logTextArea = new JTextArea();
            logTextArea.setEditable(false);
            logTextArea.setFont(new Font("Monospaced", Font.PLAIN, 12));
            JScrollPane scrollPane = new JScrollPane(logTextArea);
            frame.add(scrollPane, BorderLayout.CENTER);

            // Bottom Panel with Button
            JPanel bottomPanel = new JPanel();
            openBrowserButton = new JButton("Abrir Web App");
            openBrowserButton.setEnabled(false); // Disabled until app is ready
            openBrowserButton.setFont(new Font("SansSerif", Font.BOLD, 14));
            openBrowserButton.addActionListener(e -> openBrowserUrl());
            
            bottomPanel.add(openBrowserButton);
            frame.add(bottomPanel, BorderLayout.SOUTH);

            // Center on screen
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
            
            System.out.println("Iniciando CMED App... Por favor espere.");
        });
    }

    private static void redirectSystemStreams() {
        OutputStream out = new OutputStream() {
            @Override
            public void write(int b) throws IOException {
                updateTextArea(String.valueOf((char) b));
            }

            @Override
            public void write(byte[] b, int off, int len) throws IOException {
                updateTextArea(new String(b, off, len));
            }

            @Override
            public void write(byte[] b) throws IOException {
                write(b, 0, b.length);
            }
        };

        System.setOut(new PrintStream(out, true));
        System.setErr(new PrintStream(out, true));
    }

    private static void updateTextArea(final String text) {
        SwingUtilities.invokeLater(() -> {
            if (logTextArea != null) {
                logTextArea.append(text);
                logTextArea.setCaretPosition(logTextArea.getDocument().getLength());
            }
        });
    }

    private static void openBrowserUrl() {
        String url = "http://localhost:8080";
        if (Desktop.isDesktopSupported()) {
            Desktop desktop = Desktop.getDesktop();
            try {
                desktop.browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                System.err.println("Error al abrir navegador: " + e.getMessage());
                JOptionPane.showMessageDialog(frame, "Error al abrir navegador: " + e.getMessage());
            }
        } else {
            System.out.println("Desktop no soportado. Abre manualmente: " + url);
            JOptionPane.showMessageDialog(frame, "Desktop no soportado. Abre manualmente: " + url);
        }
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        SwingUtilities.invokeLater(() -> {
            if (openBrowserButton != null) {
                openBrowserButton.setEnabled(true);
                openBrowserButton.setText("Abrir Web App");
                System.out.println("\n------------------------------------------------");
                System.out.println("Aplicación iniciada correctamente.");
                System.out.println("------------------------------------------------\n");
                
                // Optional: Auto-open browser as logic is already requested
                openBrowserUrl();
            }
        });
    }
}
