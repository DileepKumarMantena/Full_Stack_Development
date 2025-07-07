from rest_framework.routers import DefaultRouter
from .views import DepartmentViewSet, StudentViewSet, CourseViewSet, FacultyViewSet, EnrollmentViewSet

router = DefaultRouter()
router.register(r'departments', DepartmentViewSet)
router.register(r'students', StudentViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'faculty', FacultyViewSet)
router.register(r'enrollments', EnrollmentViewSet)

urlpatterns = router.urls
