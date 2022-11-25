from django.core.management.base import BaseCommand
from faker import Faker
import faker.providers
from blogs.models import Category, Post
from donations.models import NGO, donation_request, donation_request_view
from user.models import User
from complaints.models import Complaint

CATEGORIES = [
    "Air Pollution",
    "Noise Pollution",
    "Water Pollution",
    "Solid Waste",
]

class Provider(faker.providers.BaseProvider):
    def user_generate(self):
        return self.random_element(CATEGORIES)

class Command(BaseCommand):
    help = 'Create data'

    def handle(self, *args, **kwargs):
        fake = Faker(["en_US"])
        fake.add_provider(Provider)

        for i in range(15):
            b = fake.user_generate()
            Category.objects.create(title=b, description=fake.text(100), url=fake.url(), image=fake.image_url())
            Post.objects.create(title=b, content=fake.text(100))