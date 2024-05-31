const myModal = new bootstrap.Modal(document.getElementById("myModal"));

function validateForm() {
    const name = document.querySelector('input[name="full-name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === "") {
        alert("Full name is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function handleSubscription() {
    if (validateForm()) {
        togglemyModal();
    }
}

function togglemyModal() {
    myModal.toggle();
}

document.querySelector('.standard-button').addEventListener('click', handleSubscription);
