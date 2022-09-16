let objtext = [
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jthis is 2jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjthis is 3dk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjb4;jabsfdkjbasfkthi sis 4jkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jthis is 5jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsfdkjbthi si s6asfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;this is 7jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jthis is 8jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsfdkjbasfkjkajthis is 9absfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsfdkjbasthi sis 10fkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jthis is 11jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbth is 12asdk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbthis is 13kkjasbdkjbasdk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhthis is 14asdjhasjdbkkjasbdkjbasdk;jthis is 2jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsthis is 15fdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjthis is 16basdk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdthis is 17bkkjasbdkjbasdk;jthis is 2jbjksf",
    writername: "athrv2",
  },
  {
    text: "ljajbsdjkthis is 18hasdjhasjdbkkjasbdkjbasdk;jabsfdkjbasfkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jabsfdkjbasthis 19fkjkajsbfkjabsfkjasfkjbjksf",
    writername: "athrv",
  },
  {
    text: "ljajbsdjkhasdjhasjdbkkjasbdkjbasdk;jthis is 20jbjksf",
    writername: "athrv2",
  },
];

let btn = document.getElementById("btn");
let text = document.getElementById("text");
let writer = document.getElementById("writername");
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 20);
  text.innerHTML = objtext[random].text;
  writer.innerHTML = objtext[random].writername;
});
