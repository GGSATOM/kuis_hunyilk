// Data Soal Kuis (Materi: Peluang Kelas 9 SMP)
const quizData = [
    {
        question: "1. Dua buah koin dilempar bersamaan sebanyak satu kali. Banyaknya anggota ruang sampel yang terbentuk adalah ...",
        options: [
            "4",
            "2",
            "6",
            "8",
            "3"
        ],
        answer: "4"
    },
    {
        question: "2. Sebuah dadu bermata 6 dilambungkan sekali. Peluang munculnya mata dadu prima adalah ...",
        options: [
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{6}$",
            "$\\frac{2}{3}$",
            "$\\frac{5}{6}$"
        ],
        answer: "$\\frac{1}{2}$"
    },
    {
        question: "3. Dalam sebuah kantong terdapat 5 kelereng merah, 3 kelereng biru, dan 2 kelereng hijau. Jika diambil satu kelereng secara acak, peluang terambilnya kelereng biru adalah ...",
        options: [
            "$\\frac{3}{10}$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{5}$",
            "$\\frac{3}{5}$",
            "$\\frac{7}{10}$"
        ],
        answer: "$\\frac{3}{10}$"
    },
    {
        question: "4. Dua buah dadu hitam dan putih dilambungkan bersama-sama satu kali. Peluang munculnya kedua mata dadu berjumlah 10 adalah ...",
        options: [
            "$\\frac{3}{36}$",
            "$\\frac{4}{36}$",
            "$\\frac{2}{36}$",
            "$\\frac{5}{36}$",
            "$\\frac{6}{36}$"
        ],
        answer: "$\\frac{3}{36}$"
    },
    {
        question: "5. Sebuah dadu dilambungkan sebanyak 120 kali. Frekuensi harapan munculnya mata dadu bernilai kurang dari 3 adalah ...",
        options: [
            "40 kali",
            "20 kali",
            "60 kali",
            "80 kali",
            "30 kali"
        ],
        answer: "40 kali"
    },
    {
        question: "6. Dari setumpuk kartu bridge (52 kartu) diambil satu kartu secara acak. Peluang terambilnya kartu King (K) adalah ...",
        options: [
            "$\\frac{1}{13}$",
            "$\\frac{1}{52}$",
            "$\\frac{4}{13}$",
            "$\\frac{2}{13}$",
            "$\\frac{1}{4}$"
        ],
        answer: "$\\frac{1}{13}$"
    },
    {
        question: "7. Tiga keping uang logam dilempar bersama-sama sekali. Peluang munculnya paling sedikit dua angka ($A$) adalah ...",
        options: [
            "$\\frac{4}{8}$",
            "$\\frac{3}{8}$",
            "$\\frac{2}{8}$",
            "$\\frac{5}{8}$",
            "$\\frac{7}{8}$"
        ],
        answer: "$\\frac{4}{8}$"
    },
    {
        question: "8. Peluang seorang siswa lulus ujian matematika adalah $0,85$. Peluang siswa tersebut tidak lulus ujian matematika adalah ...",
        options: [
            "$0,15$",
            "$0,25$",
            "$0,75$",
            "$0,05$",
            "$1,15$"
        ],
        answer: "$0,15$"
    },
    {
        question: "9. Dalam sebuah kotak terdapat angka 1 sampai 15 pada kartu-kartu kecil. Jika diambil satu kartu secara acak, peluang terambilnya kartu bernomor kelipatan 4 adalah ...",
        options: [
            "$\\frac{1}{5}$",
            "$\\frac{3}{15}$",
            "$\\frac{4}{15}$",
            "$\\frac{2}{15}$",
            "$\\frac{1}{3}$"
        ],
        answer: "$\\frac{3}{15}$"
    },
    {
        question: "10. Pada percobaan melempar sebuah koin sebanyak 50 kali, sisi angka muncul sebanyak 23 kali. Peluang empiris munculnya sisi gambar adalah ...",
        options: [
            "$\\frac{27}{50}$",
            "$\\frac{23}{50}$",
            "$\\frac{1}{2}$",
            "$\\frac{25}{50}$",
            "$\\frac{3}{50}$"
        ],
        answer: "$\\frac{27}{50}$"
    }
];

// Inisialisasi State Aplikasi
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Selektor Elemen HTML
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress');
const scoreLiveText = document.getElementById('score-live');
const finalScoreText = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Event Listeners Utama
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});
restartBtn.addEventListener('click', startQuiz);

// Fungsi untuk Memulai Kuis
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    showQuestion();
}

// Fungsi Menampilkan Soal
function showQuestion() {
    hasAnswered = false;
    nextBtn.classList.add('hidden');
    scoreLiveText.innerText = `Skor: ${score}`;
    progressText.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizData.length}`;
    
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    
    optionsContainer.innerHTML = '';
    
    // Acak urutan pilihan jawaban
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.className = "w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/30 text-slate-700 font-medium transition-all duration-200 cursor-pointer focus:outline-none";
        
        button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    // Render ulang matematika LaTeX via MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// Fungsi Saat User Memilih Jawaban
function selectAnswer(selectedButton, selectedOption, correctAnswer) {
    if (hasAnswered) return; 
    hasAnswered = true;
    
    const allButtons = optionsContainer.querySelectorAll('button');
    
    if (selectedOption === correctAnswer) {
        selectedButton.classList.remove('border-slate-200', 'hover:border-indigo-500');
        selectedButton.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700');
        score += 10; // 10 soal x 10 poin = 100 poin maks
        scoreLiveText.innerText = `Skor: ${score}`;
    } else {
        selectedButton.classList.remove('border-slate-200', 'hover:border-indigo-500');
        selectedButton.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700');
        
        allButtons.forEach(button => {
            if (button.innerHTML === correctAnswer) {
                button.classList.remove('border-slate-200');
                button.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700');
            }
        });
    }
    
    allButtons.forEach(button => {
        button.classList.remove('hover:border-indigo-500', 'hover:bg-indigo-50/30');
        button.disabled = true;
        button.classList.add('cursor-not-allowed');
    });
    
    nextBtn.classList.remove('hidden');
}

// Fungsi Menampilkan Skor Akhir
function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreText.innerText = score;
    
    if (score === 100) {
        resultMessage.innerText = "Luar biasa! Peluang kamu lulus ujian matematika 100%! Kamu sudah paham total konsep dasar peluang. 🌟";
    } else if (score >= 70) {
        resultMessage.innerText = "Keren! Kamu sudah menguasai sebagian besar ruang sampel dan frekuensi harapan dengan baik. Sedikit lebih teliti lagi ya! 👍";
    } else {
        resultMessage.innerText = "Tetap semangat! Ingat rumus inti peluang: P(A) = n(A) / n(S). Cari tahu berapa yang diinginkan, lalu bagi dengan total semua kemungkinan. Coba lagi yuk! 💪";
    }
}