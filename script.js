function calculateDays() {
    const targetDate = new Date(document.getElementById('targetDate').value);
    const today = new Date();
    const timeDifference = targetDate - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (isNaN(daysDifference)) {
        document.getElementById('result').innerText = "Please select a valid date.";
    } else {
        document.getElementById('result').innerText = `There are ${daysDifference} day(s) until the selected date.`;
    }
}
