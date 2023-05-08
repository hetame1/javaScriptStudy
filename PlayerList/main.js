const data = [
  {
    img: "https://i.namu.wiki/i/dLpNcPvFoVep_iwchT5a182EUeeXR-MMxjonTnFFFsBLlyvBLWBl45s4PpOZw2i86wDkYOr9wn_w2sZulHtfsgrwiCkrW986rxoSBUkiWiXBswu9vHnA4QkXAlWC8beQxD8_g2qrD9TZZBeOph6cfA.webp",
    name: "손흥민",
    job: "축구 선수",
    info: "출생: 1992년 7월 8일<br>국적: 대한민국<br> 신체: 키 184 / 체중 78kg / AB형 / 255mm <br>포지션: 윙어, 스트라이커, 세컨드 스트라이커 <br>주발: 오른발(양발) <br>등번호: 7 <br>경력: 토트넘 홋스퍼 "
  },
  {
    img: "https://i.namu.wiki/i/6iNARC30Wur_aAM-l9RpkvUjxApbfsu9jFwtPgRkL_zNhD9edEcAuQ9tPYKgZKtPvW4Dc97zk50kzYb1vnjK0hdodeJrNFfI697dQyoJhskLw2Sx8_bVyOZvX4IAWlqChGBVTWBwvGFW41P5_M0c2Q.webp",
    name: "리오넬 메시",
    job: "축구 선수",
    info: "출생: 1987년 6월 24일<br>국적: 아르헨티나<br>신체: 키 170cm / 체중 72kg / AB형 / 주발: 왼발<br>포지션: 포워드<br>경력: 바르셀로나"
  },
  {
    img: "https://i.namu.wiki/i/2nC7HfojYL-Vcvt_gWCyGpWr9JSeLgGLP-ibrvQy_Zevuvl_F9wJmi1s3RhBfz4NUCTQ7V_GeqJxS0IK0gYlmx9WStwY5CfVh1SCMjXmExDJ3nIFv7xnP7PgF024JY1Z-3Kr7RNlyn23O1RG9Bi3LQ.webp",
    name: "크리스티아누 호날도",
    job: "축구 선수",
    info: "출생: 1985년 2월 5일<br>국적: 포르투갈<br> 신체: 키 187cm / 체중 83kg / AB형 / 주발: 오른발<br>포지션: 포워드<br>경력: 맨체스터 유나이티드, 레알 마드리드, 유벤투스 등"
  },
  {
    img: "https://i.namu.wiki/i/PTjpbSLJ6F7zzZVUGJv_2XecWob3ATgrtsUxBeEcjWzGZxOmc_Plg-Y1mvuESbUDzdxFkc8cUApUWTwUuMK8sGF3hIVJBx67gNkFC7atQM10T2sMnoqbB89Ip1ZbyBhozsBZgphk_VReSA-M7bQbTA.webp",
    name: "킬리안 음바페",
    job: "축구 선수",
    info: "출생: 1998년 12월 20일<br>국적: 프랑스<br>신체: 키 178cm / 체중 73kg / B형 / 주발: 오른발<br>포지션: 포워드<br>경력: 파리 생제르맹"
  },
  {
    img: "https://i.namu.wiki/i/Db8CbDlB-ksIDJy3P5axNnTlxXu-G9WX4fFCEJbawsYkG4xQX9TVK4ERTK_Jx0bKDF41tVRQ5vPO8RE9_Y3BIXyqUS44e2VjiC-UWZY5uEHwC_EaSflegHpmXq1h-kCgWPF0k2dFBW9tqawn7riLsA.webp",
    name: "네이마르",
    job: "축구 선수",
    info: "출생: 1992년 2월 5일<br>국적: 브라질<br>신체: 키 175cm / 체중 68kg / AB형 / 주발: 오른발<br>포지션: 공격수, 윙어<br>경력: 파리 생제르맹"
  }
  
]

const $img = document.getElementById("person-img");
const $name = document.getElementById("name");
const $job = document.getElementById("job");
const $info = document.getElementById("info");

const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
const rdm = document.querySelector(".random-button");

let currentId = 0;

console.log(data);

// 첫 데이터
window.addEventListener('DOMContentLoaded', () => {
  const item = data[currentId];
  $img.src = item.img;
  $name.innerHTML = item.name;
  $job.innerHTML = item.job;
  $info.innerHTML = item.info;
});


function changePerson() {
  const item = data[currentId];
  $img.src = item.img;
  $name.innerHTML = item.name;
  $job.innerHTML = item.job;
  $info.innerHTML = item.info;
}


next.addEventListener('click', () => {
  if (currentId >= data.length -1) {
    currentId = -1;
  }
  currentId++;
  changePerson()
})
prev.addEventListener('click', () => {
  if (currentId <= 0) {
    currentId = data.length;
  }
  currentId--;
  changePerson()
})
rdm.addEventListener('click', () => {
  currentId = Math.floor(Math.random() * data.length);
  changePerson()
})