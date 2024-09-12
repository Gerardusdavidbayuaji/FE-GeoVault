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
        total_data: 8,
        datasets: [
          {
            feature_id: 1,
            file_name: "Irigasi",
            type: "Irigasi.zip",
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
          {
            feature_id: 2,
            file_name: "Jalan",
            type: "Jalan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_jalan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_jalan&bbox=112.56944605229353%2C-8.050958581073587%2C112.69341873668537%2C-7.910836884914275&width=679&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-11",
            size: "11MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 3,
            file_name: "Ladang",
            type: "Ladang.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_ladang&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_ladang&bbox=112.56894724600018%2C-8.050913371254827%2C112.69345983100007%2C-7.920095094999931&width=730&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-05",
            size: "11MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 4,
            file_name: "Pemanfaatan",
            type: "Pemanfaatan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemanfaatan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemanfaatan&bbox=112.59338985700012%2C-8.045337179666303%2C112.68035139100004%2C-7.921137443999973&width=537&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-06-29",
            size: "13MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 5,
            file_name: "Pemukiman",
            type: "Pemukiman.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemukiman&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 6,
            file_name: "Perkebunan",
            type: "Perkebunan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_perkebunan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 7,
            file_name: "Sawah",
            type: "Sawah.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sawah&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sawah&bbox=112.58595103100006%2C-8.051574676999929%2C112.69377060300023%2C-7.911025081926537&width=589&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-20",
            size: "14MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 8,
            file_name: "Genangan",
            type: "Genangan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sawah&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sawah&bbox=112.58595103100006%2C-8.051574676999929%2C112.69377060300023%2C-7.911025081926537&width=589&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-20",
            size: "14MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 2,
        title: "Pos Curah Hujan (PCH)",
        normal: 1,
        siaga: 1,
        waspada: 2,
        total_data: 5,
        datasets: [
          {
            feature_id: 1,
            file_name: "Pemanfaatan",
            type: "Pemanfaatan.zip",
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
            file_name: "Curah Hujan",
            type: "Curah Hujan.zip",
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
          {
            feature_id: 3,
            file_name: "Pemukiman",
            type: "Pemukiman.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemukiman&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 4,
            file_name: "Perkebunan",
            type: "Perkebunan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_perkebunan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 5,
            file_name: "Genangan",
            type: "Genangan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_perkebunan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 3,
        title: "ARR",
        normal: 1,
        siaga: 2,
        waspada: 2,
        total_data: 9,
        datasets: [
          {
            feature_id: 1,
            file_name: "Ladang",
            type: "Ladang.zip",
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
          {
            feature_id: 2,
            file_name: "Pemukiman",
            type: "Pemukiman.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemukiman&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 3,
            file_name: "Toponim",
            type: "Toponim.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_toponim&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_toponim&bbox=112.57526072600001%2C-8.048571480999954%2C112.68837819200007%2C-7.912429802999952&width=638&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-01",
            size: "9MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 4,
            file_name: "Jalan",
            type: "Jalan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_jalan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_jalan&bbox=112.56944605229353%2C-8.050958581073587%2C112.69341873668537%2C-7.910836884914275&width=679&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-11",
            size: "11MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 5,
            file_name: "Perkebunan",
            type: "Perkebunan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_perkebunan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 6,
            file_name: "Sawah",
            type: "Sawah.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sawah&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sawah&bbox=112.58595103100006%2C-8.051574676999929%2C112.69377060300023%2C-7.911025081926537&width=589&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-20",
            size: "14MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 7,
            file_name: "Pemanfaatan",
            type: "Pemanfaatan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemanfaatan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemanfaatan&bbox=112.59338985700012%2C-8.045337179666303%2C112.68035139100004%2C-7.921137443999973&width=537&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-06-29",
            size: "13MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 8,
            file_name: "Sungai",
            type: "Sungai.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sungai&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sungai&bbox=112.59145066017325%2C-8.04602961590412%2C112.68688491000015%2C-7.917497864999882&width=570&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-01",
            size: "9MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 9,
            file_name: "Genangan",
            type: "Genangan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sungai&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sungai&bbox=112.59145066017325%2C-8.04602961590412%2C112.68688491000015%2C-7.917497864999882&width=570&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-01",
            size: "9MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
      {
        id: 4,
        title: "AWLR",
        normal: 1,
        siaga: 1,
        waspada: 1,
        total_data: 12,
        datasets: [
          {
            feature_id: 1,
            file_name: "Curah Hujan",
            type: "Curah Hujan.zip",
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
          {
            feature_id: 2,
            file_name: "Ladang",
            type: "Ladang.zip",
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
          {
            feature_id: 3,
            file_name: "Pemukiman",
            type: "Pemukiman.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemukiman&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 4,
            file_name: "Toponim",
            type: "Toponim.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_toponim&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_toponim&bbox=112.57526072600001%2C-8.048571480999954%2C112.68837819200007%2C-7.912429802999952&width=638&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-01",
            size: "9MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 5,
            file_name: "Jalan",
            type: "Jalan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_jalan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_jalan&bbox=112.56944605229353%2C-8.050958581073587%2C112.69341873668537%2C-7.910836884914275&width=679&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-11",
            size: "11MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 6,
            file_name: "Sawah",
            type: "Sawah.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sawah&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sawah&bbox=112.58595103100006%2C-8.051574676999929%2C112.69377060300023%2C-7.911025081926537&width=589&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-20",
            size: "14MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 7,
            file_name: "Pemanfaatan",
            type: "Pemanfaatan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_pemanfaatan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemanfaatan&bbox=112.59338985700012%2C-8.045337179666303%2C112.68035139100004%2C-7.921137443999973&width=537&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-06-29",
            size: "13MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 8,
            file_name: "Perkebunan",
            type: "Perkebunan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_perkebunan&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_pemukiman&bbox=112.57221076700007%2C-8.05024337499998%2C112.69344784400019%2C-7.910846883999881&width=667&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Bondoyudo Bedadung",
            source: "Rupa Bumi Indonesia",
            date: "2024-07-18",
            size: "15MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 9,
            file_name: "Sungai",
            type: "Sungai.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_sungai&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_sungai&bbox=112.59145066017325%2C-8.04602961590412%2C112.68688491000015%2C-7.917497864999882&width=570&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Madura Bawean",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-01",
            size: "9MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 10,
            file_name: "Irigasi",
            type: "Irigasi.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_irigasi&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_irigasi&bbox=112.59756568440889%2C-8.041155222535451%2C112.6933777743648%2C-7.9181595058564795&width=598&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-10",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 11,
            file_name: "Genangan",
            type: "Genangan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_irigasi&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_irigasi&bbox=112.59756568440889%2C-8.041155222535451%2C112.6933777743648%2C-7.9181595058564795&width=598&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-10",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
          {
            feature_id: 12,
            file_name: "Penutupan Lahan",
            type: "Penutupan Lahan.zip",
            download:
              "http://localhost:8080/geoserver/geovault/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geovault%3Amalang_irigasi&outputFormat=SHAPE-ZIP",
            wms: "http://localhost:8080/geoserver/geovault/wms?service=WMS&version=1.1.0&request=GetMap&layers=geovault%3Amalang_irigasi&bbox=112.59756568440889%2C-8.041155222535451%2C112.6933777743648%2C-7.9181595058564795&width=598&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng",
            bbws: "BBWS Brantas",
            ws: "WS Brantas",
            source: "Rupa Bumi Indonesia",
            date: "2024-09-10",
            size: "10MB",
            status_qc: "Diterima",
            hasil_qc: "Update",
          },
        ],
      },
    ],
    all_data: [
      { id: 1, jenis_data: "Curah Hujan", total_data: 4 },
      { id: 2, jenis_data: "Irigasi", total_data: 3 },
      { id: 3, jenis_data: "Jalan", total_data: 3 },
      { id: 4, jenis_data: "Ladang", total_data: 4 },
      { id: 5, jenis_data: "Pemanfaatan", total_data: 3 },
      { id: 6, jenis_data: "Pemukiman", total_data: 4 },
      { id: 7, jenis_data: "Perkebunan", total_data: 4 },
      { id: 8, jenis_data: "Sawah", total_data: 4 },
      { id: 9, jenis_data: "Sungai", total_data: 4 },
      { id: 10, jenis_data: "Toponim", total_data: 2 },
      { id: 10, jenis_data: "Genangan", total_data: 4 },
      { id: 10, jenis_data: "Penutupan Lahan", total_data: 1 },
    ],
  },
];

export const filterDatas: FilterData[] = [
  {
    bulan: [
      {
        id: 1,
        value: "bulan_1",
        label: "Januari",
      },
      {
        id: 2,
        value: "bulan_2",
        label: "Februari",
      },
      {
        id: 3,
        value: "bulan_3",
        label: "Maret",
      },
      {
        id: 4,
        value: "bulan_4",
        label: "April",
      },
      {
        id: 5,
        value: "bulan_5",
        label: "Mei",
      },
      {
        id: 6,
        value: "bulan_6",
        label: "Juni",
      },
      {
        id: 7,
        value: "bulan_7",
        label: "Juli",
      },
      {
        id: 8,
        value: "bulan_8",
        label: "Agustus",
      },
      {
        id: 9,
        value: "bulan_9",
        label: "September",
      },
      {
        id: 10,
        value: "Bulan_10",
        label: "Oktober",
      },
      {
        id: 11,
        value: "bulan_11",
        label: "November",
      },
      {
        id: 12,
        value: "bulan_12",
        label: "Desember",
      },
    ],
    tahun: [
      {
        id: 1,
        value: "tahun_1",
        label: "2020",
      },
      {
        id: 2,
        value: "tahun_2",
        label: "2021",
      },
      {
        id: 3,
        value: "tahun_3",
        label: "2022",
      },
      {
        id: 4,
        value: "tahun_4",
        label: "2023",
      },
      {
        id: 5,
        value: "tahun_5",
        label: "2024",
      },
    ],
    wilayah_sungai: [
      {
        id: 1,
        value: "ws_1",
        label: "WS Bondoyudo Bedadung",
      },
      {
        id: 2,
        value: "ws_2",
        label: "WS Brantas",
      },
      {
        id: 3,
        value: "ws_3",
        label: "WS Cidanau Ciujung Cidurian",
      },
      {
        id: 4,
        value: "ws_4",
        label: "WS Ciliwung Cisadane",
      },
      {
        id: 5,
        value: "ws_5",
        label: "WS Cimanuk Cisanggarung",
      },
      {
        id: 6,
        value: "ws_6",
        label: "WS Ciwulan Cilaki",
      },
      {
        id: 7,
        value: "ws_7",
        label: "WS Citanduy",
      },
      {
        id: 8,
        value: "ws_8",
        label: "WS Citarum",
      },
      {
        id: 9,
        value: "ws_9",
        label: "WS Jratunseluna",
      },
      {
        id: 10,
        value: "ws_10",
        label: "WS Pemali Comal",
      },
      {
        id: 11,
        value: "ws_11",
        label: "WS Serayu Bogowonto",
      },
      {
        id: 12,
        value: "ws_12",
        label: "WS Progo Opak Serang",
      },
    ],
    bbws: [
      {
        id: 1,
        value: "bbws_1",
        label: "BBWS Brantas",
      },
      {
        id: 2,
        value: "bbws_2",
        label: "BBWS Cidanau Ciujung Cidurian",
      },
      {
        id: 3,
        value: "bbws_3",
        label: "BBWS Ciliwung Cisadane",
      },
      {
        id: 4,
        value: "bbws_4",
        label: "BBWS Cimanuk Cisanggarung",
      },
      {
        id: 5,
        value: "bbws_5",
        label: "BBWS Citanduy",
      },
      {
        id: 6,
        value: "bbws_6",
        label: "BBWS Citarum",
      },
      {
        id: 7,
        value: "bbws_7",
        label: "BBWS Pemali Juana",
      },
      {
        id: 8,
        value: "bbws_8",
        label: "BBWS Serayu Opak",
      },
    ],
    source: [
      {
        id: 1,
        value: "source_1",
        label: "Balai",
      },
      {
        id: 2,
        value: "source_2",
        label: "BMKG",
      },
      {
        id: 3,
        value: "source_3",
        label: "Pusat",
      },
      {
        id: 4,
        value: "source_4",
        label: "Rupa Bumi Indonesia",
      },
    ],
    all_data: [
      {
        id: 1,
        value: "data_1",
        label: "curah hujan",
      },
      {
        id: 2,
        value: "data_2",
        label: "irigasi",
      },
      {
        id: 3,
        value: "data_3",
        label: "jalan",
      },
      {
        id: 4,
        value: "data_4",
        label: "ladang",
      },
      {
        id: 5,
        value: "data_5",
        label: "pemanfaatan",
      },
      {
        id: 6,
        value: "data_6",
        label: "pemukiman",
      },
      {
        id: 7,
        value: "data_7",
        label: "perkebunan",
      },
      {
        id: 8,
        value: "data_8",
        label: "sawah",
      },
      {
        id: 9,
        value: "data_9",
        label: "sungai",
      },
      {
        id: 10,
        value: "data_10",
        label: "toponim",
      },
      {
        id: 11,
        value: "data_11",
        label: "genangan",
      },
      {
        id: 12,
        value: "data_12",
        label: "Penutupan Lahan",
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
