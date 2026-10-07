function checkAnswer(answer) {
    let result = document.getElementById("quizResult");
    if (answer == true) {
        result.innerHTML = "✅ Betul! Kita perlu menyemak kesahihan sumber sebelum berkongsi maklumat.";
        result.className = "alert alert-success mt-4";
    } else {
        result.innerHTML = "❌ Kurang tepat. Jangan berkongsi maklumat yang belum disahkan.";
        result.className = "alert alert-danger mt-4";
    }
}
