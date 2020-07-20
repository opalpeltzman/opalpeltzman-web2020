# Generated by Django 3.0.4 on 2020-07-19 22:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_registered_stylist'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='registered',
            name='stylist',
        ),
        migrations.AddField(
            model_name='registered',
            name='userType',
            field=models.CharField(choices=[('stylist', 'stylist'), ('standart', 'standart')], max_length=200, null=True),
        ),
    ]
