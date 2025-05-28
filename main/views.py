from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

    
def carousel_partial(request):
    return render(request, 'html/carousel.html')

def model_partial(request):
    return(render(request, 'html/model.html'))

def ar_view(request):
    return render(request, 'partials/arpage.html')