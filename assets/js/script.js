function time(time) {
  switch (typeof time) {
    case "number":
      break;
    case "string":
      time = +new Date(time);
      break;
    case "object":
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, "seconds", 1], // 60
    [120, "1 minute ago", "1 minute from now"], // 60*2
    [3600, "minutes", 60], // 60*60, 60
    [7200, "1 hour ago", "1 hour from now"], // 60*60*2
    [86400, "hours", 3600], // 60*60*24, 60*60
    [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
    [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
    [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = "ago",
    list_choice = 1;

  if (seconds == 0) {
    return "Just now";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "from now";
    list_choice = 2;
  }
  var i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    }
  return time;
}

var aDay = 24 * 60 * 60 * 1000;

const text = time("2023-07-10T14:02:00");
document.querySelector(".update").innerHTML = text;

var kpiJuni = document.getElementById("kpijuni");
new Chart("kpijuni", {
  type: "line",
  data: {
    labels: ["21-06", "22-06", "23-06", "24-06", "25-06", "26-06", "27-06", "29-06", "30-06"],
    datasets: [
      {
        label: "Realisasi",
        data: [70.58, 71.05, 71.25, 71.44, 71.3, 71.9, 72.58, 73.24, 73.23],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Konsolidasi Harian",
    },
  },
});

var kpiJuli = document.getElementById("kpijuli");
new Chart("kpijuli", {
  type: "line",
  data: {
    labels: ["01-07", "02-07", "03-07", "04-07", "05-07", "06-07", "07-07", "09-07", "10-07"],
    datasets: [
      {
        label: "Realisasi",
        data: [57.04, 57.04, 56.82, 66.8, 67.62, 67.59, 59.28, 69.7],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Konsolidasi Harian",
    },
  },
});

var peringkatJuli = document.getElementById("peringkatjuli");
new Chart("peringkatjuli", {
  type: "line",
  data: {
    labels: ["01-07", "02-07", "03-07", "04-07", "05-07", "06-07", "07-07", "09-07", "10-07"],
    datasets: [
      {
        label: "Realisasi",
        data: [6, 6, 6, 6, 6, 7, 7, 7],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Konsolidasi Harian",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            reverse: true,
            beginAtZero: false,
            max: 1,
            min: 10,
          },
        },
      ],
    },
  },
});

var aktifPu = document.getElementById("aktifpu");
new Chart("aktifpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [227503, 227503, 227503, 227503, 227503, 227503, 227503],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [197055, 198563, 199384, 200635, 200234, 201767, 200605],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "TK Aktif PU",
    },
  },
});

var aktifBpu = document.getElementById("aktifbpu");
new Chart("aktifbpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [187199, 187199, 187199, 187199, 187199, 187199, 187199],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [140526, 144931, 148916, 151141, 149866, 151818, 143198],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "TK Aktif BPU",
    },
  },
});

var iuranPu = document.getElementById("iuranpu");
new Chart("iuranpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [83.3, 166.6, 250, 333.3, 416.7, 500, 583, 4],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [66.6, 148.9, 234, 315, 405.8, 490.1, 513.5],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Iuran PU",
    },
  },
});

var iuranBpu = document.getElementById("iuranbpu");
new Chart("iuranbpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [1.1, 2.3, 3.5, 4.6, 5.8, 7.0, 8.1],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [1.3, 2.5, 4.0, 5.3, 6.1, 7.1, 7.6],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Iuran BPU",
    },
  },
});

var aktifJakon = document.getElementById("aktifjakon");
new Chart("aktifjakon", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [45544, 45544, 45544, 45544, 45544, 45544, 45544],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [24942, 24421, 28020, 26936, 27235, 28114, 28457],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "TK Aktif Jakon",
    },
  },
});

var iuranJakon = document.getElementById("iuranjakon");
new Chart("iuranjakon", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [0.15, 0.31, 0.47, 0.62, 0.78, 0.94, 1.09],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [0.23, 0.43, 0.74, 0.86, 1.06, 1.41, 1.53],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Iuran Jakon",
    },
  },
});

var baruPu = document.getElementById("barupu");
new Chart("barupu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [7174, 14348, 21522, 28696, 35870, 43044, 50218],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [4595, 12141, 17816, 22094, 28096, 34498, 36138],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Tk Baru PU",
    },
  },
});

var baruBpu = document.getElementById("barubpu");
new Chart("barubpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [23273, 46546, 69818, 93091, 116364, 139637, 162909],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [24224, 50908, 78684, 101528, 114552, 134157, 140683],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Tk Baru BPU",
    },
  },
});

var baruJakon = document.getElementById("barujakon");
new Chart("barujakon", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Target",
        data: [2544, 5088, 7632, 10176, 12720, 15264, 17808],
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
      },
      {
        label: "Realisasi",
        data: [867, 1623, 6454, 7738, 8804, 12763, 13106],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Tk Baru Jakon",
    },
  },
});

var itwPu = document.getElementById("itwpu");
new Chart("itwpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Realisasi",
        data: [90.67, 67.03, 67.59, 82.75, 83.14, 85.81, 73.18],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "ITW PU",
    },
  },
});

var itwBpu = document.getElementById("itwbpu");
new Chart("itwbpu", {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Realisasi",
        data: [55.28, 59.36, 64.48, 68.61, 58.55, 54.7, 44.17],
        backgroundColor: ["rgba(0, 137, 132, .2)"],
        borderColor: ["rgba(0, 10, 130, .7)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "ITW BPU",
    },
  },
});
