//line
const date = new Date(document.lastModified);
document.querySelector(".update").innerHTML = date;

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
    labels: ["01-07", "02-07", "03-07", "04-07", "05-07", "06-07", "07-07", "08-07", "09-07", "10-07"],
    datasets: [
      {
        label: "Realisasi",
        data: [57.04, 57.04, 56.82, 66.8, 67.62, 67.59],
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
        data: [197055, 198563, 199384, 200635, 200234, 201767, 200301],
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
        data: [140526, 144931, 148916, 151141, 149866, 151818, 143153],
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
        data: [66.6, 148.9, 234, 315, 405.8, 490.1, 505.4],
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
        data: [24942, 24421, 28020, 26936, 27235, 28114, 28248],
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
        data: [4595, 12141, 17816, 22094, 28096, 34498, 35707],
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
        data: [24224, 50908, 78684, 101528, 114552, 134157, 140638],
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
        data: [867, 1623, 6454, 7738, 8804, 12763, 13062],
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
        data: [90.67, 67.03, 67.59, 82.75, 83.14, 85.81, 70.44],
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
        data: [55.28, 59.36, 64.48, 68.61, 58.55, 54.7, 44.14],
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
