package com.cmed.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@Profile("portable")
public class PortableSecurityConfig {

    @Bean
    public SecurityFilterChain portableFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(authz -> authz
                // Allow static resources (Angular)
                .requestMatchers("/", "/index.html", "/*.js", "/*.css", "/assets/**", "/favicon.ico").permitAll()
                // Allow API access
                .requestMatchers("/api/**").permitAll()
                // Allow H2 Console
                .requestMatchers("/h2-console/**").permitAll()
                .anyRequest().permitAll() // Simplify for local single-user usage
            )
            .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable())); // For H2 Console

        return http.build();
    }
}
