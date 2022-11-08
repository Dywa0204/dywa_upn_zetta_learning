# REPORT

## Angular Lifecycle dan Skenarionya
Angular Lifecycle adalah sebuah siklus dari suatu component mulai dari component tersebut diinstansiasi sampai component tersebut di render. Skenarionya adalah sebagai berikut
1. constructor
2. ngOnChanges
3. ngOnInit
4. ngDoCheck
5. ngAfterContentInit
6. ngAfterContentChecked
7. ngAfterViewInit
8. ngAfterViewChecked
9. ngOnDestroy

<br><hr><br>

# QUIZ
1. 2 Case ngOnInit
    1. Saat app pertamakali dijalankan dan saat media baru diload dapat menggunakan ngOnInit untuk loading terlebih dahulu
    2. Untuk cek autentikasi (login atau belum)
2. ngOnInit dipanggil sekali ketika suatu component baru saja dirender/dijalankan
3. ngAfterViewInit dipanggil sekali setelah ngAfterContentChecked
4. ngOnChanges dipanggil sebelum ngOnInit jika component mempunyai input yang terikat
5. Saat app pertama kali dijalankan akan menggunakan ngOnInit untuk me-load semua data lalu saat salah satu list di klik akan memanggil component paginator dan table, lalu saat component itu dipanggil akan menggunakan ngOnInit pada setiap component untuk me-load data sesuai list yang dipilih dan saat memilih list lain, data pada list tadi akan dihapus menggunakan ngOnDestroy.