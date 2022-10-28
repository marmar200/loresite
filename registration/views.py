from django.shortcuts import render
from .forms import RegistrationForm
from general.models import User


# Create your views here.
def registration(request):
    context = {}
    fail = ''

    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            number = form.data['number'].strip()
            password = form.data['password'].strip()
            confirm_password = form.data['confirm_password'].strip()

    context['form'] = RegistrationForm()
    context['fail'] = fail
    return render(request, 'registration/registration.html', context)


def enter(request):
    context = {}
    fail = ''

    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            number = form.data['number'].strip()
            password = form.data['password'].strip()
            confirm_password = form.data['confirm_password'].strip()

    context['form'] = RegistrationForm()
    context['fail'] = fail
    return render(request, 'registration/enter.html', context)
