// Data Soal Kuis + Pembahasan Lengkap (LaTeX)
const quizData = [
    {
        question: "1. Dua buah koin dilempar bersamaan sebanyak satu kali. Banyaknya anggota ruang sampel yang terbentuk adalah ...",
        options: ["4", "2", "6", "8", "3"],
        answer: "4",
        explanation: "<b>Jawaban: 4</b><br>Sisi sebuah koin adalah Angka ($A$) dan Gambar ($G$). Jika dua koin dilempar bersamaan, ruang sampelnya adalah $S = \\{(A,A), (A,G), (G,A), (G,G)\\}$. Jadi, banyaknya anggota ruang sampel atau $n(S) = 2^2 = 4$."
    },
    {
        question: "2. Sebuah dadu bermata 6 dilambungkan sekali. Peluang munculnya mata dadu prima adalah ...",
        options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$", "$\\frac{5}{6}$"],
        answer: "$\\frac{1}{2}$",
        explanation: "<b>Jawaban: $\\frac{1}{2}$</b><br>Ruang sampel dadu $S = \\{1, 2, 3, 4, 5, 6\\}$, maka $n(S) = 6$.<br>Kejadian mata dadu prima $A = \\{2, 3, 5\\}$, maka $n(A) = 3$.<br>Peluangnya: $P(A) = \\frac{n(A)}{n(S)} = \\frac{3}{6} = \\frac{1}{2}$."
    },
    {
        question: "3. Dalam sebuah kantong terdapat 5 kelereng merah, 3 kelereng biru, dan 2 kelereng hijau. Jika diambil satu kelereng secara acak, peluang terambilnya kelereng biru adalah ...",
        options: ["$\\frac{3}{10}$", "$\\frac{1}{2}$", "$\\frac{1}{5}$", "$\\frac{3}{5}$", "$\\frac{7}{10}$"],
        answer: "$\\frac{3}{10}$",
        explanation: "<b>Jawaban: $\\frac{3}{10}$</b><br>Banyaknya kelereng biru $n(A) = 3$.<br>Total seluruh kelereng $n(S) = 5 + 3 + 2 = 10$.<br>Maka peluang terambil kelereng biru adalah $P(A) = \\frac{3}{10}$."
    },
    {
        question: "4. Dua buah dadu hitam dan putih dilambungkan bersama-sama satu kali. Peluang munculnya kedua mata dadu berjumlah 10 adalah ...",
        options: ["$\\frac{3}{36}$", "$\\frac{4}{36}$", "$\\frac{2}{36}$", "$\\frac{5}{36}$", "$\\frac{6}{36}$"],
        answer: "$\\frac{3}{36}$",
        explanation: "<b>Jawaban: $\\frac{3}{36}$</b><br>Total ruang sampel dua dadu adalah $n(S) = 6 \\times 6 = 36$.<br>Kejadian muncul jumlah 10 adalah $A = \\{(4,6), (5,5), (6,4)\\}$, sehingga $n(A) = 3$.<br>Maka peluangnya adalah $P(A) = \\frac{3}{36}$."
    },
    {
        question: "5. Sebuah dadu dilambungkan sebanyak 120 kali. Frekuensi harapan munculnya mata dadu bernilai kurang dari 3 adalah ...",
        options: ["40 kali", "20 kali", "60 kali", "80 kali", "30 kali"],
        answer: "40 kali",
        explanation: "<b>Jawaban: 40 kali</b><br>Mata dadu kurang dari 3 adalah $\\{1, 2\\}$, maka $n(A) = 2$. Total sisi dadu $n(S) = 6$.<br>Peluang $P(A) = \\frac{2}{6} = \\frac{1}{3}$.<br>Frekuensi Harapan $= P(A) \\times \\text{banyak percobaan} = \\frac{1}{3} \\times 120 = 40\\text{ kali}$."
    },
    {
        question: "6. Dari setumpuk kartu bridge (52 kartu) diambil satu kartu secara acak. Peluang terambilnya kartu King (K) adalah ...",
        options: ["$\\frac{1}{13}$", "$\\frac{1}{52}$", "$\\frac{4}{13}$", "$\\frac{2}{13}$", "$\\frac{1}{4}$"],
        answer: "$\\frac{1}{13}$",
        explanation: "<b>Jawaban: $\\frac{1}{13}$</b><br>Jumlah seluruh kartu bridge standar (tanpa joker) adalah $n(S) = 52$.<br>Banyaknya kartu King (K) dalam satu dek ada 4 buah (Wajik, Keriting, Hati, Sekop), maka $n(A) = 4$.<br>Peluang $= \\frac{4}{52} = \\frac{1}{13}$."
    },
    {
        question: "7. Tiga keping uang logam dilempar bersama-sama sekali. Peluang munculnya paling sedikit dua angka ($A$) adalah ...",
        options: ["$\\frac{4}{8}$", "$\\frac{3}{8}$", "$\\frac{2}{8}$", "$\\frac{5}{8}$", "$\\frac{7}{8}$"],
        answer: "$\\frac{4}{8}$",
        explanation: "<b>Jawaban: $\\frac{4}{8}$</b><br>Ruang sampel 3 koin $n(S) = 2^3 = 8$.<br>Kejadian paling sedikit 2 angka berarti bisa 2 angka atau 3 angka: $\\{AAA, AAG, AGA, GAA\\}$, maka $n(A) = 4$.<br>Peluang $= \\frac{4}{8}$."
    },
    {
        question: "8. Peluang seorang siswa lulus ujian matematika adalah $0,85$. Peluang siswa tersebut tidak lulus ujian matematika adalah ...",
        options: ["$0,15$", "$0,25$", "$0,75$", "$0,05$", "$1,15$"],
        answer: "$0,15$",
        explanation: "<b>Jawaban: $0,15$</b><br>Peluang kejadian saling komplemen (kebalikan) rumusnya adalah $P(A') = 1 - P(A)$.<br>Peluang tidak lulus $= 1 - 0,85 = 0,15$."
    },
    {
        question: "9. Dalam sebuah kotak terdapat angka 1 sampai 15 pada kartu-kartu kecil. Jika diambil satu kartu secara acak, peluang terambilnya kartu bernomor kelipatan 4 adalah ...",
        options: ["$\\frac{1}{5}$", "$\\frac{3}{15}$", "$\\frac{4}{15}$", "$\\frac{2}{15}$", "$\\frac{1}{3}$"],
        answer: "$\\frac{3}{15}$",
        explanation: "<b>Jawaban: $\\frac{3}{15}$</b><br>Ruang sampel kartu $S = \\{1, 2, 3, ..., 15\\} \\rightarrow n(S) = 15$.<br>Kartu kelipatan 4 dalam rentang tersebut adalah $\\{4, 8, 12\\} \\rightarrow n(A) = 3$.<br>Peluang terambil kartu kelipatan 4 adalah $\\frac{3}{15}$."
    },
    {
        question: "10. Pada percobaan melempar sebuah koin sebanyak 50 kali, sisi angka muncul sebanyak 23 kali. Peluang empiris munculnya sisi gambar adalah ...",
        options: ["$\\frac{27}{50}$", "$\\frac{23}{50}$", "$\\frac{1}{2}$", "$\\frac{25}{50}$", "$\\frac{3}{50}$"],
        answer: "$\\frac{27}{50}$",
        explanation: "<b>Jawaban: $\\frac{27}{50}$</b><br>Peluang empiris dihitung berdasarkan hasil eksperimen nyata.<br>Jika angka muncul 23 kali, maka sisi gambar muncul sebanyak: $50 - 23 = 27\\text{ kali}$.<br>Peluang empiris muncul gambar $= \\frac{\\text{Kemunculan Gambar}}{\\text{Total Lemparan}} = \\frac{27}{50}$."
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
const discussionContainer = document.getElementById('discussion-container'); // Selektor Baru

// Cek status saat web dimuat pertama kali
document.addEventListener('DOMContentLoaded', checkQuizStatus);

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

function checkQuizStatus() {
    const userHasDone = localStorage.getItem('kuis_peluang_selesai');
    const savedScore = localStorage.getItem('kuis_peluang_skor');

    if (userHasDone === 'true') {
        startScreen.classList.add('hidden');
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        
        finalScoreText.innerText = savedScore;
        resultMessage.innerHTML = "<span class='text-rose-600 font-bold block mb-2'>⚠️ Akses Terkunci!</span> Anda sudah menyelesaikan kuis ini sebelumnya.";
        
        restartBtn.classList.add('hidden');
        showDiscussion(); // Tampilkan pembahasan langsung jika sudah terkunci
    }
}

function startQuiz() {
    if (localStorage.getItem('kuis_peluang_selesai') === 'true') return;

    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    hasAnswered = false;
    nextBtn.classList.add('hidden');
    scoreLiveText.innerText = `Skor: ${score}`;
    progressText.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizData.length}`;
    
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.className = "w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/30 text-slate-700 font-medium transition-all duration-200 cursor-pointer focus:outline-none";
        
        button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function selectAnswer(selectedButton, selectedOption, correctAnswer) {
    if (hasAnswered) return; 
    hasAnswered = true;
    
    const allButtons = optionsContainer.querySelectorAll('button');
    
    if (selectedOption === correctAnswer) {
        selectedButton.className = "w-full text-left p-4 rounded-xl border-2 bg-emerald-50 border-emerald-500 text-emerald-700 font-medium transition-all focus:outline-none cursor-not-allowed";
        score += 10; 
        scoreLiveText.innerText = `Skor: ${score}`;
    } else {
        selectedButton.className = "w-full text-left p-4 rounded-xl border-2 bg-rose-50 border-rose-500 text-rose-700 font-medium transition-all focus:outline-none cursor-not-allowed";
        
        allButtons.forEach(button => {
            if (button.innerHTML === correctAnswer) {
                button.className = "w-full text-left p-4 rounded-xl border-2 bg-emerald-50 border-emerald-500 text-emerald-700 font-medium transition-all focus:outline-none cursor-not-allowed";
            }
        });
    }
    
    allButtons.forEach(button => {
        button.disabled = true;
        if (button !== selectedButton && button.innerHTML !== correctAnswer) {
            button.className = "w-full text-left p-4 rounded-xl border-2 border-slate-100 text-slate-400 font-medium transition-all focus:outline-none cursor-not-allowed";
        }
    });
    
    nextBtn.classList.remove('hidden');
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreText.innerText = score;
    
    localStorage.setItem('kuis_peluang_selesai', 'true');
    localStorage.setItem('kuis_peluang_skor', score);
    
    if (score === 100) {
        resultMessage.innerText = "Luar biasa! Peluang kamu lulus ujian matematika 100%! Kamu sudah paham total konsep dasar peluang. 🌟";
    } else if (score >= 70) {
        resultMessage.innerText = "Keren! Kamu sudah menguasai sebagian besar ruang sampel dan frekuensi harapan dengan baik. 👍";
    } else {
        resultMessage.innerText = "Usaha yang bagus! Nilai kamu sudah tersimpan. Silakan pelajari pembahasan di bawah untuk memperbaiki kekeliruan! 💪";
    }

    restartBtn.classList.add('hidden');
    showDiscussion(); // Generate dan munculkan teks pembahasan soal
}

// FUNGSI BARU: Merender pembahasan ke dalam HTML secara otomatis
function showDiscussion() {
    discussionContainer.innerHTML = ''; // bersihkan kontainer
    
    quizData.forEach((data, index) => {
        const discussBlock = document.createElement('div');
        discussBlock.className = "p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-2";
        
        discussBlock.innerHTML = `
            <p class="font-semibold text-slate-800">${data.question}</p>
            <p class="text-slate-600 bg-white p-3 rounded-lg border border-slate-100 leading-relaxed">${data.explanation}</p>
        `;
        
        discussionContainer.appendChild(discussBlock);
    });

    // Picu MathJax untuk merender simbol matematika di dalam teks pembahasan baru
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}
