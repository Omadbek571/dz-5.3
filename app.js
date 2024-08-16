// 1-savol

// Sizga n soni beriladi. Uning eng kichik juft karralisini toping.

// let num = 5;

// function func(num) {
//     return num * 2
// }
// console.log(func(num));

// 2-savol

// Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.
// Agar yuzasi perimetridan katta bo'lsa yuzasini aks holda peremetrini chiqaring,


// function func(a, b) {
//     let yuzasi = a * b;
//     let perimetri = 2 * (a + b);

//     if (yuzasi > perimetri) {
//         console.log("Yuzasi katta");
//     } else if (perimetri > yuzasi) {
//         console.log("Perimetri katta");
//     } else {
//         console.log("Yuzasi va perimetri teng");
//     }
// }

// func(5, 3);

// 3-savol

// Kirish faylida 2 ta qatorda mos ravishda poyezd ketishi kerak bo'lgan vatq 
// 𝑡
// (
// 0
// ≤
// 𝑡
// ≤
// 23
// )
// t(0≤t≤23). ikkinchi qatorda esa poyezd kechikishi soatlarda beriladi. 
// 𝑇
// (
// 1
// ≤
// 𝑇
// ≤
// 1000
// )
// T(1≤T≤1000)




// let ketish = 22;
// let kechikish = 5;

// function func(ketish, kechikish) {
//     let res = (ketish+ kechikish) % 24
//     return res
// }

// let natija = func(ketish, kechikish);
// console.log(natija);


// 4-savol

// MINAB(A,B) - bu funksiyaga 2 ta musbat son jo'natilganda, ularni string turiga o'tkazilgandagi uzunliklarini kichigini qaytaradi.
// Yaqinda Sardor Azimjonga 
// MINAB(A,B)
// MINAB(A,B) funksiyasini o'rgatgan edi, lekin Azimjon bu funksiyani qanday ishlatishga juda qiynalmoqda.
// Shu sababdan Sardor endi unga bu funksiyani qo'llash uchun misol berishga qaror qildi. Sardor Azimjonga 
// 𝑁
// N musbat butun sonini beradi va 
// 𝐴
// ∗
// 𝐵
// =
// 𝑁
// A∗B=N shartni qanoatlantiradigan 
// 𝐴
// A va 
// 𝐵
// B juftliklarning har biri uchun 
// MINAB(A,B)
// MINAB(A,B) funksiyaning qiymatini hisoblab chiqqach ular orasidan eng kichigini topishni talab qilmoqda.
// Azimjon bu funksiyani yaxshi o'rganmaganligi sababli siz dasturchilardan yordam so'rashga qaror qildi.

// let num1 = -45;
// let num2 = -445;
// let arr1 = num1.toString();
// let arr2 = num2.toString();

// function func(arr1, arr2) {
//     if (arr1.length < arr2.length) {
//         console.log(arr1);
//     }else{
//         console.log(arr2);

//     }
// }
// func(arr1, arr2);

// 5-savol

// ????

// 6-savol

// RoboContest.uz da yangi bo'lgan ko`pchilik ba'zida jarima tizimi qanday ishlashini tushunishmaydi. Bunda jarima quyidagicha baholanadi: Har bir xato yuborilgan urinish uchun 5 daqiqa jarima hisoblanadi va to'g'ri javobni yuborgan vaqtini daqiqa sifatida yaxlitlab qo'shiladi. Aytaylik foydalanuvchi to'g'ri javob yuborishdan oldin 5 ta xato urinishga yo'l qo'ydi. To'g'ri javobni esa 21-daqiqada yubordi.Unutmang 21 daqiqa deganda misol uchun "20:SS" nazarda tutuiladi. Unda bu masala uchun jarima:

// let xato = 5;
// let togri = 21;

// function func(xato, togri) {
//     let res = xato * 5 + togri
//     return res
// }

// let natija = func(xato, togri);
// console.log(natija);


// 7-savol

// ????


// 8-savol

// Sizga Selsiy shkalasi bo'yicha harorat beriladi. Uning Kelvin va Farangeyit shkalasi bo'yicha haroratini topuvchi dastur tuzing.

// Bunda ular quyidagicha bog'langan:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// let num = 25;

// function func(num) {
//     Kelvin = num + 273.15
//     Fahrenheit = num * 1.80 + 32.00

//     return [Kelvin, Fahrenheit].join(" ")
// }

// let natija = func(num);
// console.log(natija);


// 9-savol
// Sizga ikkita natural son beriladi. Sizning vazifangiz shu sonlar orasidagi 3ga bo'linadigan ammo 7 bo'linmaydigan sonlar yigindisini topish. Bunda ikkala chegara ham kiradi.

// function func(num1, num2) {
//     let newArr1 = [];
//     let newArr2 = [];

//     for (let i = 0; i < num1.length; i++) {
//         if (num1[i] % 3 === 0) {
//             newArr1.push(num1[i]);
//         }
//     }

//     for (let i = 0; i < num2.length; i++) {
//         if (num2[i] % 7 !== 0) {
//             newArr2.push(num2[i]);
//         }
//     }

//     return [newArr1, newArr2].join(" ");
// }

// let num1 = [45, 48, 51]; 
// let num2 = [58, 49, 56]; 

// let natija = func(num1, num2);
// console.log(natija);


// 10-savol


// function func(a, b) {
//     return (a + b) / (a * b + 4);
// }

// function test(n) {
//     let result = n;
//     for (let i = n - 1; i >= 1; i--) {
//         result = func(i, result);
//     }
//     return result;
// }

// let n = 5;
// let natija = test(n);
// console.log(natija);

// 11-savol

// ????

// 12-savol

// Doskaga 1 dan n gacha sonlar yozib chiqildi. Ulardan faqat 3,5,7 ga karralilari qolib qolganlari o'chirib tashlandi. O'sha qolgan sonlar yig'indisini toping.

// let n = 50;

// function func(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// let result = func(n);
// console.log(result);

// 13-savol

// Bill Gates ajoyib ko'rsatuvga taklif qilindi. U jurnalistga eng boy odam ekanligini yana bir bor isbotlash maqsadida unga bir chek berib undagi ixtiyoriy raqamni o'zgartirishi mumkinligini va unga shu miqdordagi pulni hadya qilishini aytdi. Jurnalist imkoniyatdan maksimal foydalanmoqchi. Unga bunda yordam bering.



// ?????


// 14-savol

// Jonibek matematika darsida faktorial darsini o'tdi va u shunday dastur yaratmoqchiki, uning dasturiga ikkita n va m sonlari kiritiladi va dastur n dan m gacha bo'lgan sonlar ko'paytmasida oxirida hosil bo'lgan nollar sonini chop etishi kerak. Ammo Jonibek sizning yordamingizga muhtoj.


// let n = 5;
// let m = 10;

// function func(n, m) {
//     let sum = 1;
//     for (let i = n; i <= m; i++) {
//         sum *= i;
//     }
//     return sum;
// }

// let result = func(n, m);
// console.log(result);




// 15-savol

// Bilmasvoy ukalari Ali va Valining yoshini esidan chiqarib qo'ydi. Ali Bilmasvoyga Validan N yoshga kattaligini aytdi. Lekin Bilmasvoy ukalarini yoshini topa olmadi. Keyin Vali Alidan K marta kichikligni aytdi. Bilamsvoy vanihoyat ukalarining yoshini topdi. Siz ham topingchi!?



//     let N = 5;
//     let K = 2; 

// function findAges(N, K) {
//     let A = N / (1 - 1 / K);
//     let V = A / K;
    
//     return [A, V];
// }


// let result = findAges(N, K);
// console.log(`Ali age: ${result.Ali}`);
// console.log(`Vali age: ${result.Vali}`);


// 16-savol



// function F(n) {
//     return 1 + 3 * n + 3 * n * n;
// }

// function sumF(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += F(i);
//     }
//     return sum;
// }

// let N = 5; 
// let result = sumF(N);
// console.log(result);











































































