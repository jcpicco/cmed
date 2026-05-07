package com.medcentermanager.app.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("MedCenter Manager Backend API")
                        .version("1.1.0")
                        .description("Documentación completa de la API RESTful de la aplicación MedCenter Manager (Gestor Médico). Incluye todos los endpoints para Pacientes, Historias Clínicas, Diagnósticos, Notas y manejo de Archivos.")
                        .contact(new Contact()
                                .name("MedCenter Manager Development Team")
                                .email("contacto@medcenter-manager.app"))
                        .license(new License().name("Proprietaria").url("https://medcenter-manager.app")));
    }
}
