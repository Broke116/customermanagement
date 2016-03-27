demoApp.factory('SimpleFactory', function(){
    //dataları tutan json.normalde veritabanından çekme işlemi yapılır.
    var customers = [
      {
        "email": "shelby.orr@xiix.net",
        "company": "XIIX",
        "location": {
          "country": "Barbados"
        },
        "name": {
          "last": "Orr",
          "first": "Shelby"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,322.28",
        "id": "f1b445f9-95ee-46e1-ae4b-362a73b0529d"
      },
      {
        "email": "preston.sloan@exosis.biz",
        "company": "EXOSIS",
        "location": {
          "country": "Nepal"
        },
        "name": {
          "last": "Sloan",
          "first": "Preston"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,925.54",
        "id": "46a39f05-53d4-4851-8910-e49872286f4e"
      },
      {
        "email": "ratliff.roy@playce.us",
        "company": "PLAYCE",
        "location": {
          "country": "Portugal"
        },
        "name": {
          "last": "Roy",
          "first": "Ratliff"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,581.18",
        "id": "07372ac9-050d-463f-bb43-479d76ac09b6"
      },
      {
        "email": "sanders.wiley@musaphics.biz",
        "company": "MUSAPHICS",
        "location": {
          "country": "France"
        },
        "name": {
          "last": "Wiley",
          "first": "Sanders"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,862.41",
        "id": "71e30bab-21aa-4107-a61f-2124c7ddb9a4"
      },
      {
        "email": "mcfarland.levy@strozen.me",
        "company": "STROZEN",
        "location": {
          "country": "Martinique"
        },
        "name": {
          "last": "Levy",
          "first": "Mcfarland"
        },
        "age": 31,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,349.74",
        "id": "a7090b25-40d2-43c8-9119-850f6bd32bbd"
      },
      {
        "email": "hill.holmes@fitcore.org",
        "company": "FITCORE",
        "location": {
          "country": "Myanmar"
        },
        "name": {
          "last": "Holmes",
          "first": "Hill"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,514.53",
        "id": "21ac8802-7c32-40b5-9a9f-ac0b891a8727"
      },
      {
        "email": "hilda.kelly@voratak.ca",
        "company": "VORATAK",
        "location": {
          "country": "Viet Nam"
        },
        "name": {
          "last": "Kelly",
          "first": "Hilda"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,942.77",
        "id": "09873861-0437-4d61-a887-8339d98a2799"
      },
      {
        "email": "foreman.kemp@amril.name",
        "company": "AMRIL",
        "location": {
          "country": "Estonia"
        },
        "name": {
          "last": "Kemp",
          "first": "Foreman"
        },
        "age": 29,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,481.57",
        "id": "c9f62469-77f2-4002-b346-b46f053d4343"
      },
      {
        "email": "robles.bender@momentia.info",
        "company": "MOMENTIA",
        "location": {
          "country": "Japan"
        },
        "name": {
          "last": "Bender",
          "first": "Robles"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,325.08",
        "id": "df313819-a354-43a0-8860-af3b92c48732"
      },
      {
        "email": "sondra.huff@zytrek.co.uk",
        "company": "ZYTREK",
        "location": {
          "country": "Turkmenistan"
        },
        "name": {
          "last": "Huff",
          "first": "Sondra"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,425.70",
        "id": "fe22ee2e-f44d-4e08-be1c-64522c86df80"
      },
      {
        "email": "mcpherson.cortez@knowlysis.tv",
        "company": "KNOWLYSIS",
        "location": {
          "country": "Kenya"
        },
        "name": {
          "last": "Cortez",
          "first": "Mcpherson"
        },
        "age": 32,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,682.06",
        "id": "a607d7fb-7843-4e55-a624-f135908389f5"
      },
      {
        "email": "peck.walker@anivet.io",
        "company": "ANIVET",
        "location": {
          "country": "Guam"
        },
        "name": {
          "last": "Walker",
          "first": "Peck"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,164.50",
        "id": "a8f6db1e-40f8-4763-bcb4-05695f1c2836"
      },
      {
        "email": "lang.chang@zillacom.net",
        "company": "ZILLACOM",
        "location": {
          "country": "Solomon Islands"
        },
        "name": {
          "last": "Chang",
          "first": "Lang"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,451.57",
        "id": "7be16fc7-0066-4237-9af0-da01a35d72b8"
      },
      {
        "email": "powell.wilder@gogol.biz",
        "company": "GOGOL",
        "location": {
          "country": "Niger"
        },
        "name": {
          "last": "Wilder",
          "first": "Powell"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,624.06",
        "id": "2dbe27b5-1f01-4e0c-ad39-8d57a4f3dc8d"
      },
      {
        "email": "myers.dillon@prowaste.us",
        "company": "PROWASTE",
        "location": {
          "country": "Saint Lucia"
        },
        "name": {
          "last": "Dillon",
          "first": "Myers"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,365.59",
        "id": "0287a0cd-037d-4b13-900c-181a9c52ef7b"
      },
      {
        "email": "hebert.weiss@franscene.biz",
        "company": "FRANSCENE",
        "location": {
          "country": "French Guiana"
        },
        "name": {
          "last": "Weiss",
          "first": "Hebert"
        },
        "age": 39,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,509.26",
        "id": "22d1c995-9958-4158-99ad-6b297a492063"
      },
      {
        "email": "johnson.mccall@atomica.me",
        "company": "ATOMICA",
        "location": {
          "country": "Slovak Republic"
        },
        "name": {
          "last": "Mccall",
          "first": "Johnson"
        },
        "age": 36,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,463.47",
        "id": "574422d8-fb91-40af-92e7-f0db765af833"
      },
      {
        "email": "florence.osborne@kenegy.org",
        "company": "KENEGY",
        "location": {
          "country": "Sierra Leone"
        },
        "name": {
          "last": "Osborne",
          "first": "Florence"
        },
        "age": 37,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,305.94",
        "id": "9912a5c2-6bf1-43c8-af86-6d762382fd29"
      },
      {
        "email": "beck.lara@kongle.ca",
        "company": "KONGLE",
        "location": {
          "country": "Netherlands"
        },
        "name": {
          "last": "Lara",
          "first": "Beck"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,368.99",
        "id": "1409961c-c01e-4374-b0c3-a72ebc69b8e3"
      },
      {
        "email": "violet.petersen@bezal.name",
        "company": "BEZAL",
        "location": {
          "country": "Zambia"
        },
        "name": {
          "last": "Petersen",
          "first": "Violet"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,705.94",
        "id": "74f53b80-093d-4047-ad3d-0da3ddbdeb24"
      },
      {
        "email": "hicks.sparks@housedown.info",
        "company": "HOUSEDOWN",
        "location": {
          "country": "South Africa"
        },
        "name": {
          "last": "Sparks",
          "first": "Hicks"
        },
        "age": 24,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,559.39",
        "id": "76609de1-6644-487d-9b32-b7aa0974518c"
      },
      {
        "email": "aimee.gutierrez@intradisk.co.uk",
        "company": "INTRADISK",
        "location": {
          "country": "Cuba"
        },
        "name": {
          "last": "Gutierrez",
          "first": "Aimee"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,342.69",
        "id": "4fc940fa-bb68-45ae-82bb-c4eeea0a5d24"
      },
      {
        "email": "dunn.munoz@magnafone.tv",
        "company": "MAGNAFONE",
        "location": {
          "country": "Bangladesh"
        },
        "name": {
          "last": "Munoz",
          "first": "Dunn"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,461.94",
        "id": "1c8df530-63d3-4ed4-9c5c-db05948fd59c"
      },
      {
        "email": "bobbi.hayes@nurali.io",
        "company": "NURALI",
        "location": {
          "country": "China"
        },
        "name": {
          "last": "Hayes",
          "first": "Bobbi"
        },
        "age": 36,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,466.29",
        "id": "c87d46a1-8ebd-4220-a34a-674333d90515"
      },
      {
        "email": "warner.horn@genekom.net",
        "company": "GENEKOM",
        "location": {
          "country": "Gabon"
        },
        "name": {
          "last": "Horn",
          "first": "Warner"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,429.66",
        "id": "14ed003a-45e7-4f3e-9beb-c90f6507a849"
      },
      {
        "email": "johns.slater@bitendrex.biz",
        "company": "BITENDREX",
        "location": {
          "country": "Kazakhstan"
        },
        "name": {
          "last": "Slater",
          "first": "Johns"
        },
        "age": 37,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,963.26",
        "id": "59e64246-63f0-4fbe-87fe-d976a5735c9d"
      },
      {
        "email": "campos.boyd@pawnagra.us",
        "company": "PAWNAGRA",
        "location": {
          "country": "Italy"
        },
        "name": {
          "last": "Boyd",
          "first": "Campos"
        },
        "age": 28,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,883.73",
        "id": "5dbf3740-a380-4f6f-bc99-ad438b329002"
      },
      {
        "email": "whitney.carver@exposa.biz",
        "company": "EXPOSA",
        "location": {
          "country": "East Timor"
        },
        "name": {
          "last": "Carver",
          "first": "Whitney"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,386.80",
        "id": "4ebe4c8d-67a3-4fee-b808-6ffb4af0cfc3"
      },
      {
        "email": "lynch.dillard@baluba.me",
        "company": "BALUBA",
        "location": {
          "country": "Yemen"
        },
        "name": {
          "last": "Dillard",
          "first": "Lynch"
        },
        "age": 22,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,929.72",
        "id": "c0a4d045-cc44-46ab-8f0b-5971c25f479c"
      },
      {
        "email": "lula.guerrero@gorganic.org",
        "company": "GORGANIC",
        "location": {
          "country": "Trinidad and Tobago"
        },
        "name": {
          "last": "Guerrero",
          "first": "Lula"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,621.96",
        "id": "e3dfbd70-8619-4cfc-8b68-c50a63c35068"
      },
      {
        "email": "willis.ashley@veraq.ca",
        "company": "VERAQ",
        "location": {
          "country": "Thailand"
        },
        "name": {
          "last": "Ashley",
          "first": "Willis"
        },
        "age": 39,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,612.21",
        "id": "8325999f-220b-4b45-acd7-279b11bb3095"
      },
      {
        "email": "burton.guthrie@codact.name",
        "company": "CODACT",
        "location": {
          "country": "Singapore"
        },
        "name": {
          "last": "Guthrie",
          "first": "Burton"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,266.22",
        "id": "48ec5a55-182e-4f16-aa2e-a0dcdff35064"
      },
      {
        "email": "lillian.guy@blurrybus.info",
        "company": "BLURRYBUS",
        "location": {
          "country": "Chad"
        },
        "name": {
          "last": "Guy",
          "first": "Lillian"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,756.65",
        "id": "d7301ebf-0c8e-4514-b48a-ef02b6198068"
      },
      {
        "email": "leona.jordan@daido.co.uk",
        "company": "DAIDO",
        "location": {
          "country": "Finland"
        },
        "name": {
          "last": "Jordan",
          "first": "Leona"
        },
        "age": 28,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,988.83",
        "id": "ca18cf11-563a-49c9-85fc-4fd568b91156"
      },
      {
        "email": "cunningham.gamble@olympix.tv",
        "company": "OLYMPIX",
        "location": {
          "country": "Yugoslavia"
        },
        "name": {
          "last": "Gamble",
          "first": "Cunningham"
        },
        "age": 40,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,194.09",
        "id": "fe565f45-8dcc-4524-ac04-dcea6b1ab410"
      },
      {
        "email": "ora.mclaughlin@ziggles.io",
        "company": "ZIGGLES",
        "location": {
          "country": "Greece"
        },
        "name": {
          "last": "Mclaughlin",
          "first": "Ora"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,175.09",
        "id": "ce1e349f-e92c-420e-9ab4-9e159f22a522"
      },
      {
        "email": "jamie.moore@kiosk.net",
        "company": "KIOSK",
        "location": {
          "country": "Jordan"
        },
        "name": {
          "last": "Moore",
          "first": "Jamie"
        },
        "age": 34,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,828.98",
        "id": "b03d674e-0f58-4113-b2be-ef97925c24ea"
      },
      {
        "email": "moody.ramsey@shepard.biz",
        "company": "SHEPARD",
        "location": {
          "country": "Laos"
        },
        "name": {
          "last": "Ramsey",
          "first": "Moody"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,030.83",
        "id": "f32556af-bd74-4b82-a8f5-6432f1590078"
      },
      {
        "email": "boyer.wilkins@geekosis.us",
        "company": "GEEKOSIS",
        "location": {
          "country": "Samoa"
        },
        "name": {
          "last": "Wilkins",
          "first": "Boyer"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,807.00",
        "id": "79409f46-052b-425d-963f-2e63de1d2d62"
      },
      {
        "email": "marcie.davidson@rocklogic.biz",
        "company": "ROCKLOGIC",
        "location": {
          "country": "Lithuania"
        },
        "name": {
          "last": "Davidson",
          "first": "Marcie"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,103.91",
        "id": "632427f2-56a5-4ad1-8581-44743a22fcba"
      },
      {
        "email": "gloria.nielsen@enersol.me",
        "company": "ENERSOL",
        "location": {
          "country": "Guyana"
        },
        "name": {
          "last": "Nielsen",
          "first": "Gloria"
        },
        "age": 22,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,504.01",
        "id": "44d85f4d-c73c-4bf7-bdae-6b738f105448"
      },
      {
        "email": "tanya.dejesus@uni.org",
        "company": "UNI",
        "location": {
          "country": "Cote D'Ivoire (Ivory Coast)"
        },
        "name": {
          "last": "Dejesus",
          "first": "Tanya"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,252.55",
        "id": "a5012e8b-60ce-4458-9a94-63577e5d2ad7"
      },
      {
        "email": "summer.jones@equitax.ca",
        "company": "EQUITAX",
        "location": {
          "country": "Anguilla"
        },
        "name": {
          "last": "Jones",
          "first": "Summer"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,986.42",
        "id": "f3b70039-c7c0-4bbd-8d7f-079b26aef938"
      },
      {
        "email": "brittney.higgins@comdom.name",
        "company": "COMDOM",
        "location": {
          "country": "Ghana"
        },
        "name": {
          "last": "Higgins",
          "first": "Brittney"
        },
        "age": 31,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,946.34",
        "id": "237cf0e8-04ae-4775-9a6e-d83706263754"
      },
      {
        "email": "cantrell.le@centrexin.info",
        "company": "CENTREXIN",
        "location": {
          "country": "Heard and McDonald Islands"
        },
        "name": {
          "last": "Le",
          "first": "Cantrell"
        },
        "age": 22,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,157.66",
        "id": "01cca36a-7991-4ccc-b9e3-2eb170cb7e06"
      },
      {
        "email": "barber.emerson@kidstock.co.uk",
        "company": "KIDSTOCK",
        "location": {
          "country": "Somalia"
        },
        "name": {
          "last": "Emerson",
          "first": "Barber"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,794.13",
        "id": "e3a38a79-83e6-4f18-8658-1829b69c8b23"
      },
      {
        "email": "melody.ellis@scentric.tv",
        "company": "SCENTRIC",
        "location": {
          "country": "Denmark"
        },
        "name": {
          "last": "Ellis",
          "first": "Melody"
        },
        "age": 34,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,471.73",
        "id": "54e9f5ee-2db8-4a45-aa29-096d17166baa"
      },
      {
        "email": "crane.bernard@pharmacon.io",
        "company": "PHARMACON",
        "location": {
          "country": "Svalbard and Jan Mayen Islands"
        },
        "name": {
          "last": "Bernard",
          "first": "Crane"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,098.51",
        "id": "c47dbe8e-2460-42c9-ac84-dce653847079"
      },
      {
        "email": "alexis.hopper@medalert.net",
        "company": "MEDALERT",
        "location": {
          "country": "Haiti"
        },
        "name": {
          "last": "Hopper",
          "first": "Alexis"
        },
        "age": 34,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,719.76",
        "id": "7845f2f3-b6b2-494d-91d3-efb382a7c75c"
      },
      {
        "email": "pat.case@xerex.biz",
        "company": "XEREX",
        "location": {
          "country": "Tajikistan"
        },
        "name": {
          "last": "Case",
          "first": "Pat"
        },
        "age": 32,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,394.80",
        "id": "4345b191-89b8-4534-abde-52e8d1dbeb59"
      },
      {
        "email": "vaughn.chavez@filodyne.us",
        "company": "FILODYNE",
        "location": {
          "country": "Russian Federation"
        },
        "name": {
          "last": "Chavez",
          "first": "Vaughn"
        },
        "age": 31,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,317.12",
        "id": "d4df2c7e-8b31-4db9-afaf-fb6870541023"
      },
      {
        "email": "kerri.crane@spacewax.biz",
        "company": "SPACEWAX",
        "location": {
          "country": "Benin"
        },
        "name": {
          "last": "Crane",
          "first": "Kerri"
        },
        "age": 30,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,008.36",
        "id": "477b8b0b-7fbc-424a-be82-a922e512fb1a"
      },
      {
        "email": "evangeline.atkinson@edecine.me",
        "company": "EDECINE",
        "location": {
          "country": "Paraguay"
        },
        "name": {
          "last": "Atkinson",
          "first": "Evangeline"
        },
        "age": 36,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,329.25",
        "id": "1bc66c0d-4d3a-46c2-aefd-c211105ef7df"
      },
      {
        "email": "mitzi.church@columella.org",
        "company": "COLUMELLA",
        "location": {
          "country": "Guinea-Bissau"
        },
        "name": {
          "last": "Church",
          "first": "Mitzi"
        },
        "age": 39,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,986.55",
        "id": "f859fe97-882c-4f65-92ff-f578f9e45034"
      },
      {
        "email": "margo.mccarty@teraprene.ca",
        "company": "TERAPRENE",
        "location": {
          "country": "Azerbaijan"
        },
        "name": {
          "last": "Mccarty",
          "first": "Margo"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,632.26",
        "id": "47380fff-6f04-4eb8-a10b-97c08fdaa30e"
      },
      {
        "email": "maynard.patterson@zisis.name",
        "company": "ZISIS",
        "location": {
          "country": "Honduras"
        },
        "name": {
          "last": "Patterson",
          "first": "Maynard"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,062.08",
        "id": "798c5fbe-c333-4624-8033-209a62e2d546"
      },
      {
        "email": "conway.clayton@applideck.info",
        "company": "APPLIDECK",
        "location": {
          "country": "United States"
        },
        "name": {
          "last": "Clayton",
          "first": "Conway"
        },
        "age": 40,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,536.13",
        "id": "3db14647-2a85-4183-8d07-9d035f98f234"
      },
      {
        "email": "davis.jimenez@obliq.co.uk",
        "company": "OBLIQ",
        "location": {
          "country": "Eritrea"
        },
        "name": {
          "last": "Jimenez",
          "first": "Davis"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,975.78",
        "id": "6b4986d0-216c-4a67-b086-902ce375d2dc"
      },
      {
        "email": "chase.shaw@comcubine.tv",
        "company": "COMCUBINE",
        "location": {
          "country": "Kiribati"
        },
        "name": {
          "last": "Shaw",
          "first": "Chase"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,726.04",
        "id": "326dcc3c-4a59-4b8b-a239-3c863e3f98b2"
      },
      {
        "email": "patrick.riley@bristo.io",
        "company": "BRISTO",
        "location": {
          "country": "Vatican City State (Holy See)"
        },
        "name": {
          "last": "Riley",
          "first": "Patrick"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,536.58",
        "id": "bf8e0560-b3c3-4b4c-b8f8-abddea9edf97"
      },
      {
        "email": "lourdes.padilla@darwinium.net",
        "company": "DARWINIUM",
        "location": {
          "country": "Aruba"
        },
        "name": {
          "last": "Padilla",
          "first": "Lourdes"
        },
        "age": 24,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,844.14",
        "id": "6657b82b-90e1-42d8-abe4-80d8dedca5fc"
      },
      {
        "email": "ina.luna@nikuda.biz",
        "company": "NIKUDA",
        "location": {
          "country": "Cayman Islands"
        },
        "name": {
          "last": "Luna",
          "first": "Ina"
        },
        "age": 33,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,268.05",
        "id": "f0c64187-9841-4dc3-ad5f-5a569bb454a6"
      },
      {
        "email": "meagan.landry@solgan.us",
        "company": "SOLGAN",
        "location": {
          "country": "Wallis and Futuna Islands"
        },
        "name": {
          "last": "Landry",
          "first": "Meagan"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,170.49",
        "id": "0f20f672-2b06-44ea-a4c7-aebd7df8dabd"
      },
      {
        "email": "angelina.herring@electonic.biz",
        "company": "ELECTONIC",
        "location": {
          "country": "Tokelau"
        },
        "name": {
          "last": "Herring",
          "first": "Angelina"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,219.10",
        "id": "953d425b-a1df-4620-a07f-3d5a8f308a80"
      },
      {
        "email": "marisol.sawyer@shopabout.me",
        "company": "SHOPABOUT",
        "location": {
          "country": "Rwanda"
        },
        "name": {
          "last": "Sawyer",
          "first": "Marisol"
        },
        "age": 37,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,037.39",
        "id": "b7b0bc4d-a10a-4f41-9898-3675cf91b748"
      },
      {
        "email": "burnett.chandler@datagene.org",
        "company": "DATAGENE",
        "location": {
          "country": "Tonga"
        },
        "name": {
          "last": "Chandler",
          "first": "Burnett"
        },
        "age": 23,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,534.47",
        "id": "0525db2a-9bf6-4a81-9631-237332d7c02d"
      },
      {
        "email": "diann.sweeney@essensia.ca",
        "company": "ESSENSIA",
        "location": {
          "country": "Pitcairn"
        },
        "name": {
          "last": "Sweeney",
          "first": "Diann"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,257.01",
        "id": "10c767f7-35b7-470a-a7f8-0536a9594d32"
      },
      {
        "email": "pugh.washington@enersave.name",
        "company": "ENERSAVE",
        "location": {
          "country": "Guatemala"
        },
        "name": {
          "last": "Washington",
          "first": "Pugh"
        },
        "age": 24,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,845.88",
        "id": "6450b3d5-eae5-41d9-9c7c-1b650cf7ee9b"
      },
      {
        "email": "therese.goodwin@earthmark.info",
        "company": "EARTHMARK",
        "location": {
          "country": "Andorra"
        },
        "name": {
          "last": "Goodwin",
          "first": "Therese"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,459.58",
        "id": "9038b2eb-aaac-43cb-8410-78c1106b0193"
      },
      {
        "email": "kelley.daugherty@medifax.co.uk",
        "company": "MEDIFAX",
        "location": {
          "country": "Austria"
        },
        "name": {
          "last": "Daugherty",
          "first": "Kelley"
        },
        "age": 30,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,325.54",
        "id": "fa671265-c318-4729-b582-5dfc1faf5b77"
      },
      {
        "email": "santiago.woodard@pivitol.tv",
        "company": "PIVITOL",
        "location": {
          "country": "United Kingdom"
        },
        "name": {
          "last": "Woodard",
          "first": "Santiago"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,918.59",
        "id": "90737f22-a996-4460-94a8-453deeeb50d4"
      },
      {
        "email": "finch.koch@cemention.io",
        "company": "CEMENTION",
        "location": {
          "country": "Latvia"
        },
        "name": {
          "last": "Koch",
          "first": "Finch"
        },
        "age": 39,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,373.15",
        "id": "ba2e6c68-1ad2-4dec-bcb9-cfac1ad09c19"
      },
      {
        "email": "carver.bryan@inventure.net",
        "company": "INVENTURE",
        "location": {
          "country": "Liberia"
        },
        "name": {
          "last": "Bryan",
          "first": "Carver"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,175.14",
        "id": "34985b4b-ba0e-49be-add9-6c68b0f0c726"
      },
      {
        "email": "coleman.meadows@plexia.biz",
        "company": "PLEXIA",
        "location": {
          "country": "Luxembourg"
        },
        "name": {
          "last": "Meadows",
          "first": "Coleman"
        },
        "age": 36,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,340.48",
        "id": "c216da97-152b-4c81-a1db-cf286f1fd797"
      },
      {
        "email": "snow.bradshaw@quailcom.us",
        "company": "QUAILCOM",
        "location": {
          "country": "Cambodia"
        },
        "name": {
          "last": "Bradshaw",
          "first": "Snow"
        },
        "age": 29,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,607.20",
        "id": "8d26d094-c52e-4242-a992-234ac3db4e4a"
      },
      {
        "email": "madelyn.gray@cubicide.biz",
        "company": "CUBICIDE",
        "location": {
          "country": "San Marino"
        },
        "name": {
          "last": "Gray",
          "first": "Madelyn"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,839.23",
        "id": "e4afb715-8bdf-4146-b551-672a51a6cb09"
      },
      {
        "email": "robbie.vaughn@talkola.me",
        "company": "TALKOLA",
        "location": {
          "country": "Maldives"
        },
        "name": {
          "last": "Vaughn",
          "first": "Robbie"
        },
        "age": 30,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,803.63",
        "id": "93cee473-53ef-4aa5-b204-2d54cdbf743a"
      },
      {
        "email": "mabel.copeland@endipine.org",
        "company": "ENDIPINE",
        "location": {
          "country": "Philippines"
        },
        "name": {
          "last": "Copeland",
          "first": "Mabel"
        },
        "age": 40,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,597.06",
        "id": "6715fcec-7226-4ce4-8c21-79d1592f9d71"
      },
      {
        "email": "alice.stephenson@duflex.ca",
        "company": "DUFLEX",
        "location": {
          "country": "Macau"
        },
        "name": {
          "last": "Stephenson",
          "first": "Alice"
        },
        "age": 38,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,862.39",
        "id": "2225aa4b-8edd-40af-979f-cde783bba774"
      },
      {
        "email": "wynn.ford@zillanet.name",
        "company": "ZILLANET",
        "location": {
          "country": "Armenia"
        },
        "name": {
          "last": "Ford",
          "first": "Wynn"
        },
        "age": 26,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,453.41",
        "id": "30ed8fec-09cc-4b00-9f23-e8ca7c2d0d5a"
      },
      {
        "email": "riddle.willis@enomen.info",
        "company": "ENOMEN",
        "location": {
          "country": "Morocco"
        },
        "name": {
          "last": "Willis",
          "first": "Riddle"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,564.26",
        "id": "85a0587d-2c6a-4cf9-9e5b-218bddec34b2"
      },
      {
        "email": "franco.talley@thredz.co.uk",
        "company": "THREDZ",
        "location": {
          "country": "Reunion"
        },
        "name": {
          "last": "Talley",
          "first": "Franco"
        },
        "age": 40,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,376.10",
        "id": "0ef0e409-b994-478c-9755-6421eb4c2382"
      },
      {
        "email": "barrett.mccoy@medesign.tv",
        "company": "MEDESIGN",
        "location": {
          "country": "Equatorial Guinea"
        },
        "name": {
          "last": "Mccoy",
          "first": "Barrett"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,235.46",
        "id": "0c972ff5-b227-46d4-909b-6c4d0bedb140"
      },
      {
        "email": "michael.zamora@neocent.io",
        "company": "NEOCENT",
        "location": {
          "country": "Australia"
        },
        "name": {
          "last": "Zamora",
          "first": "Michael"
        },
        "age": 22,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,591.97",
        "id": "63a2d9df-81a6-454f-9389-d45113034be9"
      },
      {
        "email": "holt.gordon@geekus.net",
        "company": "GEEKUS",
        "location": {
          "country": "Ethiopia"
        },
        "name": {
          "last": "Gordon",
          "first": "Holt"
        },
        "age": 24,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,619.43",
        "id": "6ee7d4c6-5cbd-4e45-9029-1ef1ef823cd1"
      },
      {
        "email": "roach.coffey@architax.biz",
        "company": "ARCHITAX",
        "location": {
          "country": "Tunisia"
        },
        "name": {
          "last": "Coffey",
          "first": "Roach"
        },
        "age": 30,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,650.43",
        "id": "01c5dbdf-b6e6-4851-918c-f58c8f68b3d3"
      },
      {
        "email": "leila.preston@rubadub.us",
        "company": "RUBADUB",
        "location": {
          "country": "Marshall Islands"
        },
        "name": {
          "last": "Preston",
          "first": "Leila"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,033.62",
        "id": "c44d0cbf-e678-4d5d-b4b4-b3949285873a"
      },
      {
        "email": "alexandria.branch@quintity.biz",
        "company": "QUINTITY",
        "location": {
          "country": "Kyrgyzstan"
        },
        "name": {
          "last": "Branch",
          "first": "Alexandria"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,165.79",
        "id": "5cb7d7b5-b3f2-470c-953c-263b22bf92d8"
      },
      {
        "email": "bonner.rodriquez@parcoe.me",
        "company": "PARCOE",
        "location": {
          "country": "St. Helena"
        },
        "name": {
          "last": "Rodriquez",
          "first": "Bonner"
        },
        "age": 27,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,648.14",
        "id": "dacd0d29-f4d0-4083-8b4a-81a9d03d2815"
      },
      {
        "email": "samantha.barron@recrisys.org",
        "company": "RECRISYS",
        "location": {
          "country": "Poland"
        },
        "name": {
          "last": "Barron",
          "first": "Samantha"
        },
        "age": 35,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,752.82",
        "id": "aa904db1-81ca-49c8-bd9e-f68d67ec76b1"
      },
      {
        "email": "guadalupe.williams@intergeek.ca",
        "company": "INTERGEEK",
        "location": {
          "country": "Greenland"
        },
        "name": {
          "last": "Williams",
          "first": "Guadalupe"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,253.72",
        "id": "d6239872-28e8-47a2-bb83-5ae0395937a9"
      },
      {
        "email": "livingston.bright@cedward.name",
        "company": "CEDWARD",
        "location": {
          "country": "Namibia"
        },
        "name": {
          "last": "Bright",
          "first": "Livingston"
        },
        "age": 40,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,060.46",
        "id": "8b418544-1e58-4a3f-9b48-f81d91c051e7"
      },
      {
        "email": "delia.benton@accusage.info",
        "company": "ACCUSAGE",
        "location": {
          "country": "Peru"
        },
        "name": {
          "last": "Benton",
          "first": "Delia"
        },
        "age": 25,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,842.38",
        "id": "18e4f65c-b190-4f4e-9be9-515a745a4b24"
      },
      {
        "email": "blanca.gould@roboid.co.uk",
        "company": "ROBOID",
        "location": {
          "country": "French Polynesia"
        },
        "name": {
          "last": "Gould",
          "first": "Blanca"
        },
        "age": 29,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,907.80",
        "id": "8995d216-e2ee-4dfb-993f-d17c64902031"
      },
      {
        "email": "cornelia.briggs@zaj.tv",
        "company": "ZAJ",
        "location": {
          "country": "Iran"
        },
        "name": {
          "last": "Briggs",
          "first": "Cornelia"
        },
        "age": 20,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,254.66",
        "id": "acb950a7-4230-429c-8cd8-3192dc7810fa"
      },
      {
        "email": "davidson.decker@tersanki.io",
        "company": "TERSANKI",
        "location": {
          "country": "Turks and Caicos Islands"
        },
        "name": {
          "last": "Decker",
          "first": "Davidson"
        },
        "age": 21,
        "picture": "http://placehold.it/32x32",
        "balance": "$2,142.72",
        "id": "32f70b73-2f7c-4eff-b354-6a1c65c7450a"
      },
      {
        "email": "lamb.cleveland@isotrack.net",
        "company": "ISOTRACK",
        "location": {
          "country": "Burundi"
        },
        "name": {
          "last": "Cleveland",
          "first": "Lamb"
        },
        "age": 34,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,936.78",
        "id": "83d3f398-288c-4af8-b463-f4ece9fc988f"
      },
      {
        "email": "bertie.schroeder@telequiet.biz",
        "company": "TELEQUIET",
        "location": {
          "country": "Virgin Islands (US)"
        },
        "name": {
          "last": "Schroeder",
          "first": "Bertie"
        },
        "age": 22,
        "picture": "http://placehold.it/32x32",
        "balance": "$3,674.30",
        "id": "5b5eff8c-85d3-43b7-a16d-f3ce4be4c269"
      },
      {
        "email": "haley.cobb@helixo.us",
        "company": "HELIXO",
        "location": {
          "country": "Palau"
        },
        "name": {
          "last": "Cobb",
          "first": "Haley"
        },
        "age": 29,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,979.19",
        "id": "dfd3e725-f7ad-4c47-b791-ac9e4c2d3345"
      },
      {
        "email": "imelda.oneal@entropix.biz",
        "company": "ENTROPIX",
        "location": {
          "country": "Lebanon"
        },
        "name": {
          "last": "Oneal",
          "first": "Imelda"
        },
        "age": 30,
        "picture": "http://placehold.it/32x32",
        "balance": "$1,201.50",
        "id": "4cf1ca34-8016-49f7-8af3-a0153ccafc2d"
      }
    ];

    var factory = {};

    factory.getCustomers = function(){
        return { 
          getAll:function(){
            return customers;
          } 
        }
    };

    factory.getCustomerById = function(id){
      for(var i=0;i<customers.length;i++){
        var obj = customers[i];
        var value = obj["id"];
        for(var j=0; j<value.length;j++){
          if(value[j] == id){
            return obj;
          }
        }
      }
    };

    return factory;
});    	