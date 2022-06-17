# Generated by Django 4.0.5 on 2022-06-17 16:38

import backend.models
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ArtPiece',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('blog', models.TextField()),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('artist', models.CharField(max_length=255)),
                ('art', models.FileField(upload_to=backend.models.upload_path)),
            ],
        ),
    ]
