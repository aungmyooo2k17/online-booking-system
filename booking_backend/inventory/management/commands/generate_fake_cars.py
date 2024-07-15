
from django.core.management.base import BaseCommand
from faker import Faker
from inventory.models import Brand, Car
from django.core.files import File
import os
import random


class Command(BaseCommand):
    help = 'Generate fake data for cars'

    def handle(self, *args, **kwargs):
        fake = Faker()

        brands = []
        for _ in range(10):
            brand_name = fake.company()
            brand, created = Brand.objects.get_or_create(name=brand_name)
            brands.append(brand)

        images_dir = os.path.join(os.path.dirname(__file__), 'sample_images')

        for _ in range(100):
            model_name = fake.word().capitalize()
            model_year = fake.random_int(min=1990, max=2024)
            brand = fake.random_element(brands)
            type_choice = fake.random_element(['petrol', 'hybrid', 'electric'])
            no_of_seater = fake.random_int(min=2, max=7)
            engine_litre = fake.pydecimal(
                left_digits=1, right_digits=1, positive=True)
            price = fake.random_int(min=100, max=10000)

            image_file = random.choice(os.listdir(images_dir))
            image_path = os.path.join(images_dir, image_file)

            with open(image_path, 'rb') as f:
                car = Car(
                    model_name=model_name,
                    model_year=model_year,
                    brand=brand,
                    type=type_choice,
                    no_of_seater=no_of_seater,
                    engine_litre=engine_litre,
                    price=price,
                )
                car.image.save(image_file, File(f), save=True)

        self.stdout.write(self.style.SUCCESS(
            'Successfully generated fake cars data'))
