import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Qara Diqqat! axios va i18n o'rnatish kerak
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "about" : "About",
      "contact": "Contact",
      "Internet":"Online",
      "hello":"Hello I'm Muhammadali G'anibekov",
      "lorem": "My name is Muhammadali Ghanibekov, I am a good web developer with experience in creating modern and intuitive user interfaces. I specialize in frontend development using HTML, CSS and JavaScript, as well as popular frameworks.",
      "men_bilan":"Contact me",
      "About":"ABOUT ME",
      "again":"Hello again everyone! I have been fond of creativity since childhood, I like it, it is a future profession, thanks to this I can provide for myself and realize my dream - to travel, currently I specialize in front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love,  because I try to make a name for myself, exclude plagiarism and  negligence, thoroughly study the project, the client and its  target audience, work for quality, take into account all the  edits and wishes, and fulfill the order as quickly and uniquely  as possible. Trusting me, you will get the maximum profit for  your project, save your nerves and time",
      "port":"PORTFOLIO",
      "Lover":"Website about food",
      "NFT":"NFT Marketplase",
      "Rolling":"Rolling",
      "Sub":"Subscribe",
      "foter1":`Copyright © ${new Date().getFullYear()}  - All right reserved`,
      "Login":"Login",
    },
  },
  uz: {
    translation: {
      "Home": "Asosiy",
      "about": "Haqida",
      "contact": "Aloqa",
      "Internet":"Internet",
      "hello":"Salom men Muhammadali G'anibekov",
      "lorem":"Mening ismim Muhammadali G'anibekov, men zamonaviy va intuitiv foydalanuvchi interfeyslarini yaratish tajribasiga ega bo'lgan yaxshi veb-dasturchiman. Men HTML, CSS va JavaScript, shuningdek, mashhur ramkalar yordamida frontend ishlab chiqishga ixtisoslashganman.",
      "men_bilan":"Men bilan bog'laning",
      "About":"MEN HAQIMDA",
      "again":"Hammaga yana salom! Men bo'lganman bolaligimdan ijodga mehr qo'yganman, bu menga yoqadi, bu kelajak kasb, bu tufayli men o'zimni ta'minlash va amalga oshirish mumkin mening orzuim - sayohat qilish, hozir men front-end va ixtisoslashgan back-end ishlab chiqish, kalit taslim veb-saytlar. Nima uchun tanlash kerak meni? Men har bir buyurtmaga katta mas'uliyat va muhabbat bilan yondoshaman, chunki men o'zim uchun nom chiqarishga harakat qilaman, plagiatni istisno qilaman va beparvolik, loyihani, mijozni va uni yaxshilab o'rganish maqsadli auditoriya, sifat uchun ishlash, hamma narsani hisobga olish tahrirlar va istaklar va buyurtmani tez va noyob tarzda bajarish iloji boricha. Menga ishoning, siz maksimal foyda olasiz loyihangiz, asablaringizni va vaqtingizni tejang.",
      "port":"PORTFOLIO",
      "Lover":"Oziq-ovqat haqida veb-sayt",
      "NFT":"NFT bozori",
      "Rolling":"Rolling",
      "Sub":"Obuna boʻling",
      "foter1":`Mualliflik huquqi © ${new Date().getFullYear()} - Barcha huquqlar himoyalangan`,
      "Login":"Tizimga kirish",
    },
  },
  ru: {
    translation: {
      "Home": "дом",
      "about": "о",
      "contact": "Контакт",
      "Internet":"Интернет",
      "hello":"Здравствуйте, я Мухаммадали Ганибеков.",
      "lorem":"Меня зовут Мухаммадали Ганибеков, я опытный веб-разработчик с опытом создания современных и интуитивно понятных пользовательских интерфейсов. Специализируюсь на frontend-разработке с использованием HTML, CSS и JavaScript, а также популярных фреймворков.",
      "men_bilan":"Свяжитесь со мной",
      "About":"ОБО МНЕ",
      "again":"Всем привет ещё раз! Я с детства увлекаюсь творчеством, мне это нравится, это моя будущая профессия, благодаря которой я могу обеспечить себя и реализовать свою мечту – путешествовать. В настоящее время я специализируюсь на front-end и back-end разработке сайтов под ключ. Почему вам стоит выбрать меня? Я подхожу к каждому заказу с большой ответственностью и любовью, потому что стараюсь сделать себе имя, исключить плагиат и халатность, досконально изучить проект, клиента и его целевую аудиторию, работать на качество, учитывать все правки и пожелания, а также выполнить заказ максимально быстро и уникально. Доверившись мне, вы получите максимальную прибыль от своего проекта, сэкономите нервы и время.",
      "port":"ПОРТФЕЛЬ",
      "Lover":"Сайт о еде",
      "NFT":"NFT Marketplace",
      "Rolling":"Роллинг",
      "Sub":"Подписаться",
      "foter1":`Авторское право © ${new Date().getFullYear()}  - Все права защищены.`,
      "Login":"Авторизоваться",
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "uz",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
