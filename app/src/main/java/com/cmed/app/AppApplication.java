package com.medcentermanager.app;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@SpringBootApplication
public class AppApplication {

    private static JFrame frame;
    private static JButton openBrowserButton;
    private static JLabel statusLabel;

    public static void main(String[] args) {
        // Create GUI
        createAndShowGUI();

        // Run Spring Boot in a separate thread to keep UI responsive
        new Thread(() -> {
            try {
                new SpringApplicationBuilder(AppApplication.class)
                        .headless(false)
                        .profiles("portable")
                        .run(args);
            } catch (Exception e) {
                e.printStackTrace();
                setErrorStatus();
            }
        }).start();
    }

    private static void createAndShowGUI() {
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
            } catch (Exception e) {
                // Ignore
            }

            frame = new JFrame("MedCenter Manager App Launcher");
            frame.setUndecorated(true);
            frame.setSize(600, 400); // Standard splash size
            frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);

            // Attempt to load the background image
            Image bgImage = null;
            try {
                java.net.URL imgUrl = AppApplication.class.getResource("/launcher-bg.jpg");
                if (imgUrl == null) imgUrl = AppApplication.class.getResource("/launcher-bg.png");
                if (imgUrl != null) {
                    bgImage = new ImageIcon(imgUrl).getImage();
                }
            } catch (Exception e) {
                // Ignore if not found
            }

            final Image finalBgImage = bgImage;
            JPanel panel = new JPanel() {
                @Override
                protected void paintComponent(Graphics g) {
                    super.paintComponent(g);
                    if (finalBgImage != null) {
                        g.drawImage(finalBgImage, 0, 0, getWidth(), getHeight(), this);
                    } else {
                        // Fallback if image is missing
                        g.setColor(new Color(245, 245, 245));
                        g.fillRect(0, 0, getWidth(), getHeight());
                        g.setColor(new Color(150, 150, 150));
                        g.setFont(new Font("SansSerif", Font.BOLD, 24));
                        g.drawString("MedCenter Manager APP LAUNCHER", 160, 200);
                        g.setFont(new Font("SansSerif", Font.PLAIN, 12));
                        g.drawString("Add launcher-bg.jpg to src/main/resources/", 170, 230);
                    }
                    g.setColor(Color.LIGHT_GRAY);
                    g.drawRect(0, 0, getWidth() - 1, getHeight() - 1);
                }
            };
            panel.setLayout(null); // Absolute positioning

            // Enable dragging for undecorated window
            MouseAdapter ma = new MouseAdapter() {
                int posX = 0, posY = 0;
                @Override
                public void mousePressed(MouseEvent e) {
                    posX = e.getX();
                    posY = e.getY();
                }
                @Override
                public void mouseDragged(MouseEvent e) {
                    frame.setLocation(e.getXOnScreen() - posX, e.getYOnScreen() - posY);
                }
            };
            panel.addMouseListener(ma);
            panel.addMouseMotionListener(ma);

            // Status Label (Top-Left)
            statusLabel = new JLabel("Inicializando...");
            statusLabel.setFont(new Font("SansSerif", Font.PLAIN, 15));
            statusLabel.setForeground(new Color(30, 30, 30));
            statusLabel.setBounds(20, 20, 400, 30);
            panel.add(statusLabel);

            // Close Button (Top-Right)
            JButton closeBtn = new JButton("X");
            closeBtn.setFont(new Font("SansSerif", Font.PLAIN, 13));
            closeBtn.setMargin(new Insets(0, 0, 0, 0));
            closeBtn.setFocusPainted(false);
            closeBtn.setContentAreaFilled(false); // Make background transparent
            closeBtn.setForeground(new Color(120, 120, 120)); // Subtle gray
            closeBtn.setBorderPainted(false);
            closeBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
            closeBtn.setBounds(frame.getWidth() - 35, 10, 25, 25);
            closeBtn.addActionListener(e -> {
                int result = JOptionPane.showConfirmDialog(
                        frame,
                        "Esto detendrá completamente la aplicación MedCenter Manager.\n¿Estás seguro?",
                        "Confirmar salida",
                        JOptionPane.YES_NO_OPTION,
                        JOptionPane.WARNING_MESSAGE
                );
                if (result == JOptionPane.YES_OPTION) {
                    System.exit(0);
                }
            });
            panel.add(closeBtn);

            // Minimize Button (Top-Right)
            JButton minBtn = new JButton("_");
            minBtn.setFont(new Font("SansSerif", Font.PLAIN, 13));
            minBtn.setMargin(new Insets(0, 0, 0, 0));
            minBtn.setFocusPainted(false);
            minBtn.setContentAreaFilled(false); // Make background transparent
            minBtn.setForeground(new Color(120, 120, 120)); // Subtle gray
            minBtn.setBorderPainted(false);
            minBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
            minBtn.setBounds(frame.getWidth() - 65, 10, 25, 25);
            minBtn.addActionListener(e -> frame.setExtendedState(JFrame.ICONIFIED));
            panel.add(minBtn);

            // Open Web App Button (Bottom-Right)
            openBrowserButton = new JButton("Abrir App Web");
            openBrowserButton.setEnabled(false); // Disabled until ready
            openBrowserButton.setFont(new Font("SansSerif", Font.BOLD, 14));
            openBrowserButton.setFocusPainted(false);
            openBrowserButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
            openBrowserButton.setBounds(frame.getWidth() - 170, frame.getHeight() - 50, 150, 35);
            openBrowserButton.addActionListener(e -> openBrowserUrl());
            panel.add(openBrowserButton);

            frame.setContentPane(panel);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }

    private static void openBrowserUrl() {
        String url = "http://localhost:8080";
        if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
            try {
                Desktop.getDesktop().browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                JOptionPane.showMessageDialog(frame, "Error al abrir navegador: " + e.getMessage());
            }
        } else {
            JOptionPane.showMessageDialog(frame, "Navegador no soportado. Abre manualmente: " + url);
        }
    }

    private static void setErrorStatus() {
        SwingUtilities.invokeLater(() -> {
            if (statusLabel != null) {
                statusLabel.setText("Error. Contacte con el administrador.");
                statusLabel.setForeground(Color.RED);
            }
        });
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        SwingUtilities.invokeLater(() -> {
            if (statusLabel != null) {
                statusLabel.setText("");
            }
            if (openBrowserButton != null) {
                openBrowserButton.setEnabled(true);
            }
        });
    }
}
