# Generated by Django 3.0.6 on 2020-06-25 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='title',
            new_name='fullName',
        ),
        migrations.RemoveField(
            model_name='project',
            name='desc',
        ),
        migrations.RemoveField(
            model_name='project',
            name='imgUrl',
        ),
        migrations.RemoveField(
            model_name='project',
            name='url',
        ),
        migrations.AddField(
            model_name='project',
            name='mail',
            field=models.CharField(default='DEFAULT VALUE', max_length=70),
        ),
        migrations.AddField(
            model_name='project',
            name='message',
            field=models.TextField(default='DEFAULT VALUE', max_length=200),
        ),
    ]
