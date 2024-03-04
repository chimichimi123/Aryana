document.addEventListener("DOMContentLoaded", function() {
    const breedSelect = document.getElementById('breed-select');
    const showImageButton = document.getElementById('show-image-btn');
    const dogImage = document.getElementById('dog-image');

    breedSelect.addEventListener('change', function() {
        const selectedBreed = breedSelect.value;
        fetchBreedInfo(selectedBreed);
    });

    showImageButton.addEventListener('click', function() {
        dogImage.src = 'https://i.redd.it/fozo8fwvcey71.jpg';
        dogImage.style.display = 'block';
    });
});

h2.textContent = "This content added by JavaScript";