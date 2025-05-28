from django.shortcuts import render

def carousel_partial(request):
    return render(request, 'html/carousel.html')

def model_partial(request):
    return render(request, 'html/model.html')

def ar_view(request):
    return render(request, 'html/arpage.html')
