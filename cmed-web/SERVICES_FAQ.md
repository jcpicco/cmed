# ❓ Frequently Asked Questions (FAQ)

## 🚀 Initial Setup

### Q: What do I need to get started?
**A:**
- Node.js and npm installed
- The cmed-app backend running on port 8080
- Angular CLI (optional but recommended)

### Q: How do I install dependencies?
**A:**
```bash
cd /home/jcpicco/Documents/git/angular-templates
npm install
```

### Q: How do I start the project?
**A:**
```bash
npm start
# Or with Angular CLI
ng serve --open
```

### Q: What port does Angular run on?
**A:** By default on `http://localhost:4200`

---

## 🔧 Services and Injection

### Q: How do I use a service in my component?
**A:**
```typescript
import { PatientService } from './services/patient.service';

export class MyComponent {
  constructor(private patientService: PatientService) {}
}
```

### Q: What does `providedIn: 'root'` mean?
**A:** It means the service is a singleton and will be available throughout the entire application.

### Q: Can I use multiple services in one component?
**A:** Yes, inject as many as you need:
```typescript
constructor(
  private patientService: PatientService,
  private medicalRecordService: MedicalRecordService
) {}
```

---

## 📡 HTTP and Observables

### Q: What are Observables?
**A:** Objects that represent a stream of data that can be observed. You must subscribe to receive data.

### Q: Why do I use `.subscribe()`?
**A:** Because Observables are "lazy" - they don't execute anything until you subscribe.

### Q: How do I handle errors?
**A:**
```typescript
this.patientService.getAllPatients().subscribe(
  (data) => console.log(data),           // Success
  (error) => console.error(error),       // Error
  () => console.log('Completed')         // End
);
```

### Q: How do I avoid memory leaks?
**A:** Use `takeUntil()` to automatically unsubscribe:
```typescript
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

private destroy$ = new Subject<void>();

ngOnInit() {
  this.patientService.getAllPatients()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.patients = data);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

## 🌐 Backend and API URL

### Q: How do I change the API URL?
**A:** Edit `src/environments/environment.ts` (development) or `environment.prod.ts` (production)

### Q: Where is the API URL?
**A:**
- Development: `http://localhost:8080/api`
- Production: `https://api.cmed.app/api`

### Q: How do I add CORS?
**A:** In the Spring Boot backend, add:
```java
@Configuration
public class CorsConfig {
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
          .allowedOrigins("http://localhost:4200")
          .allowedMethods("*");
      }
    };
  }
}
```

### Q: What is the backend port?
**A:** Default port 8080 (configurable in application.properties)

---

## 📝 Models and DTOs

### Q: What is the difference between DTOs?
**A:**
- `PatientCreateDto` - For creating patients (without ID)
- `PatientUpdateDto` - For updating (only fields to change)
- `PatientDto` - Complete server response

### Q: Why are DTOs used?
**A:** To validate data, avoid sending sensitive information, and separate internal data from the public API.

### Q: Are optional fields really optional?
**A:** Yes, interfaces in TypeScript marked with `?` are optional.

---

## 📁 File Upload

### Q: How do I upload a file?
**A:**
```typescript
const file = (document.querySelector('input[type=file]') as HTMLInputElement).files![0];

this.fileService.uploadFile(
  file,
  EntityType.MEDICAL_RECORD,
  FileCategory.DOCUMENT,
  'medical-record-id'
).subscribe(uploaded => console.log(uploaded));
```

### Q: What file types are supported?
**A:** Depends on the backend. Currently supports any file type.

### Q: What is the maximum size?
**A:** Depends on the backend configuration (default 10MB in Spring Boot).

---

## 🐛 Common Problems

### Q: I receive "Cannot find module"
**A:** Make sure to:
1. Install dependencies: `npm install`
2. Import paths are correct
3. Rebuild the project

### Q: The backend is not responding
**A:** Check that:
1. The backend is running on port 8080
2. You can access `http://localhost:8080/api/patients`
3. There are no CORS errors

### Q: CORS error
**A:** Add CORS on the backend or configure it in Angular:
```typescript
// In app.module.ts
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
```

### Q: Data does not update in the view
**A:** Make sure to:
1. Subscribe to the Observable
2. Assign the data to a component property
3. Change Detection works (it does by default)

### Q: I receive undefined in the data
**A:** You are probably accessing data before the subscription completes. Use:
```typescript
<div *ngIf="patients | async as patients">
  {{ patients.length }}
</div>
```

---

## 🔐 Security

### Q: Where do I store the JWT token?
**A:** In the Authorization header. Intercept the requests:
```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    return next.handle(req);
  }
}
```

### Q: Is the data safe on the client?
**A:** Do not rely solely on JavaScript. Always validate in the backend.

---

## 📊 Performance

### Q: How do I optimize requests?
**A:**
1. Use `shareReplay()` to cache results
2. Cancel requests with `takeUntil()`
3. Use `OnPush` change detection
4. Implement pagination in the backend

### Q: How do I implement pagination?
**A:** Add parameters to the services:
```typescript
getAllPatients(page: number, pageSize: number) {
  return this.http.get<PatientListDto[]>(
    `${this.apiUrl}?page=${page}&pageSize=${pageSize}`
  );
}
```

---

## 🧪 Testing

### Q: How do I test the services?
**A:**
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch patients', () => {
    const mockPatients = [];
    service.getAllPatients().subscribe(patients => {
      expect(patients).toEqual(mockPatients);
    });
    httpMock.expectOne('http://localhost:8080/api/patients').flush(mockPatients);
  });
});
```

---

## 📚 Useful Resources

- [Angular HTTP Client](https://angular.io/guide/http)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Best Practices](https://angular.io/guide/styleguide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)

---

## 🆘 Still have questions?

1. Review the documentation files
2. Look at the `example.component.ts` component
3. Check the comments in the services
4. Make sure backend and frontend are both running
5. Open the browser console (F12) to see errors

---

**Need additional help? Check the documentation files included in the project.** 📚
