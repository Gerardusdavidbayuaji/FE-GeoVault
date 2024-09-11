import { SampleData } from "./types";
import { FilterData } from "./types";

export const sampleDatas: SampleData[] = [
  {
    data: [
      {
        id: 1,
        title: "Pos Duga Air (PDA)",
        normal: 1,
        siaga: 3,
        waspada: 2,
        total_data: 9,
        datasets: [
          {
            feature_id: 1,
            file_name: "irigasi",
            type: "irigasi.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_irigasi&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_irigasi&bbox=112.59756568440889%2C-8.041155222535451%2C112.6933777743648%2C-7.9181595058564795&width=598&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-10",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 2,
        title: "Pos Duga Air (PDA)",
        normal: 1,
        siaga: 3,
        waspada: 2,
        total_data: 9,
        datasets: [
          {
            feature_id: 1,
            file_name: "pemanfaatan",
            type: "pemanfaatan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemanfaatan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemanfaatan&bbox=112.59338985700012%2C-8.045337179666303%2C112.68035139100004%2C-7.921137443999973&width=537&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-06-29",
            size: "13MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 2,
            file_name: "curah_hujan_010424_050424",
            type: "curah_hujan_010424_050424.zip",
            download:
              "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_curah_hujan01042024_05042024&bbox=110.88803867171373%2C-8.785523478688916%2C116.27793037643086%2C-5.0395487439105136&width=768&height=533&srs=EPSG%3A4326&styles=&format=image%2Fgeotiff",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_curah_hujan01042024_05042024&bbox=110.88803867171373%2C-8.785523478688916%2C116.27793037643086%2C-5.0395487439105136&width=768&height=533&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-04-01",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 3,
        title: "Pos Duga Air (PDA)",
        normal: 1,
        siaga: 3,
        waspada: 2,
        total_data: 9,
        datasets: [
          {
            feature_id: 1,
            file_name: "ladang",
            type: "ladang.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_ladang&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_ladang&bbox=112.56894724600018%2C-8.050913371254827%2C112.69345983100007%2C-7.920095094999931&width=730&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-05",
            size: "11MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 4,
        title: "Pos Duga Air (PDA)",
        normal: 1,
        siaga: 3,
        waspada: 2,
        total_data: 9,
        datasets: [
          {
            feature_id: 1,
            file_name: "curah_hujan_010424_050424",
            type: "curah_hujan_010424_050424.zip",
            download:
              "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_curah_hujan_01022024_05022024&bbox=110.88803867171373%2C-8.785523478688916%2C116.27793037643086%2C-5.0395487439105136&width=768&height=533&srs=EPSG%3A4326&styles=&format=image%2Fgeotiff",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_curah_hujan_01022024_05022024&bbox=110.88803867171373%2C-8.785523478688916%2C116.27793037643086%2C-5.0395487439105136&width=768&height=533&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-04-01",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
    ],
    all_data: {
      curah_hujan: 4,
      irigasi: 3,
      jalan: 3,
      ladang: 4,
      pemanfaatan: 3,
      pemukiman: 4,
      perkebunan: 4,
      sawah: 4,
      sungai: 4,
      toponim: 2,
    },
  },
];

export const filterData: FilterData[] = [
  {
    bulan: [
      {
        id: 1,
        month: "januari",
      },
      {
        id: 2,
        month: "februari",
      },
      {
        id: 3,
        month: "maret",
      },
      {
        id: 4,
        month: "april",
      },
      {
        id: 5,
        month: "mei",
      },
      {
        id: 6,
        month: "juni",
      },
      {
        id: 7,
        month: "juli",
      },
      {
        id: 8,
        month: "agustus",
      },
      {
        id: 9,
        month: "september",
      },
      {
        id: 10,
        month: "oktober",
      },
      {
        id: 11,
        month: "november",
      },
      {
        id: 12,
        month: "desember",
      },
    ],
    tahun: [
      {
        id: 1,
        year: 2020,
      },
      {
        id: 2,
        year: 2021,
      },
      {
        id: 3,
        year: 2022,
      },
      {
        id: 4,
        year: 2023,
      },
      {
        id: 5,
        year: 2024,
      },
    ],
    wilayah_sungai: [
      {
        id: 1,
        ws: "WS Bondoyudo Bedadung",
      },
      {
        id: 2,
        ws: "WS Brantas",
      },
      {
        id: 3,
        ws: "WS Cidanau Ciujung Cidurian",
      },
      {
        id: 4,
        ws: "WS Ciliwung Cisadane",
      },
      {
        id: 5,
        ws: "WS Cimanuk Cisanggarung",
      },
      {
        id: 6,
        ws: "WS Ciwulan Cilaki",
      },
      {
        id: 7,
        ws: "WS Citanduy",
      },
      {
        id: 8,
        ws: "WS Citarum",
      },
      {
        id: 9,
        ws: "WS Jratunseluna",
      },
      {
        id: 10,
        ws: "WS Pemali Comal",
      },
      {
        id: 11,
        ws: "WS Serayu Bogowonto",
      },
      {
        id: 12,
        ws: "WS Progo Opak Serang",
      },
    ],
    bbws: [
      {
        id: 1,
        bbws: "BBWS Brantas",
      },
      {
        id: 2,
        bbws: "BBWS Cidanau Ciujung Cidurian",
      },
      {
        id: 3,
        bbws: "BBWS Ciliwung Cisadane",
      },
      {
        id: 4,
        bbws: "BBWS Cimanuk Cisanggarung",
      },
      {
        id: 5,
        bbws: "BBWS Citanduy",
      },
      {
        id: 6,
        bbws: "BBWS Citarum",
      },
      {
        id: 7,
        bbws: "BBWS Pemali Juana",
      },
      {
        id: 8,
        bbws: "BBWS Serayu Opak",
      },
    ],
    source: [
      {
        id: 1,
        data_source: "balai",
      },
      {
        id: 2,
        data_source: "BMKG",
      },
      {
        id: 3,
        data_source: "Pusat",
      },
      {
        id: 4,
        data_source: "Rupa Bumi Indonesia",
      },
    ],
    all_data: [
      {
        id: 1,
        data_spasial: "curah hujan",
      },
      {
        id: 2,
        data_spasial: "irigasi",
      },
      {
        id: 3,
        data_spasial: "jalan",
      },
      {
        id: 4,
        data_spasial: "ladang",
      },
      {
        id: 5,
        data_spasial: "pemanfaatan",
      },
      {
        id: 6,
        data_spasial: "pemukiman",
      },
      {
        id: 7,
        data_spasial: "perkebunan",
      },
      {
        id: 8,
        data_spasial: "sawah",
      },
      {
        id: 9,
        data_spasial: "sungai",
      },
      {
        id: 10,
        data_spasial: "toponim",
      },
    ],
    basemap: [
      {
        id: 1,
        jenis: "Satellite",
        layer_basemap:
          "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}@2x.jpg?key=AW8IuG306IIk8kNdxEw6",
      },
      {
        id: 2,
        jenis: "Open Street Map",
        layer_basemap:
          "ihttps://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=AW8IuG306IIk8kNdxEw6",
      },
    ],
  },
];
