# Code Test Hitopia

Detail kompleksitas code untuk BalancedBracket.js:

1. Inisialisasi variabel:
    1. stack, openingBrackets, closingBrackets, dan matchingBrackets membutuhkan waktu konstan, yaitu O(1), karena hanya menginisialisasi array dan objek dengan elemen tetap
2. Melakukan iterasi sebanyak n kali melalui string:
    1. waktu yang diperlukan untuk iterasi adalah O(n)
3. Pengecekan karakter:
    1. Pengecekan apakah karakter termasuk dalam openingBrackets atau closingBrackets menggunakan fungsi includes(), yang memiliki kompleksitas waktu terburuk O(m), dengan m adalah jumlah elemen dalam array.
    2. Oleh karena itu, kompleksitas pengecekan karakter adalah O(1).
4. Operasi pada stack:
    1. Memasukkan elemen ke dalam stack menggunakan metode push() memiliki kompleksitas waktu O(1).
    2. Mengeluarkan elemen dari stack menggunakan metode pop() juga memiliki kompleksitas waktu O(1).
5. Pengecekan kecocokan braket:
    1. Jika karakter adalah braket penutup, maka dilakukan pengecekan dengan braket pembuka pada bagian atas stack.
    2. Jika tidak cocok, maka fungsi langsung mengembalikan 'NO'.
    3. Pengecekan kecocokan braket memiliki kompleksitas waktu O(1).
6. Pengembalian hasil:
    1. Setelah selesai melakukan iterasi, dilakukan pengecekan apakah stack masih memiliki elemen.
    2. Jika stack kosong, berarti semua braket terkait telah memiliki pasangan yang sesuai.
    3. Jika stack tidak kosong, berarti terdapat braket yang belum memiliki pasangan.
    4. Kedua pengecekan tersebut memiliki kompleksitas waktu O(1).
