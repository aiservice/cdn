goTmp()
function goTmp() {
    try {
        var url = window.location.href;
        var map = [
            {key : "287a6d29-675f-4154-80f6-ab0b93767eae", value : "7742"},
            {key : "4a350b8a-7c8d-4668-8c29-47a8f6c5cf06", value : "7780"},
            {key : "2cb1e31c-be8c-4586-851c-dc6e655f2fcf", value : "7796"},
            {key : "b444d254-49d2-4f7e-831a-d55f6dff69c9", value : "7798"},
            {key : "13fd5313-1b32-423f-bb29-f7fc2597a0da", value : "7963"},
            {key : "72bcbf9a-34d8-4e7c-a269-d5c0369a18ec", value : "8000"},
            {key : "83dc41cb-a35e-4c6f-8e50-7e9d225f2232", value : "8026"},
            {key : "01e6405d-bf62-4793-896f-7f0ff8b9b1fa", value : "8306"},
            {key : "86256077-8746-4707-b66b-9b3903b16052", value : "8889"},
            {key : "11ef7154-6c1d-4ff9-adfc-2ad55284e2e6", value : "8892"},
            {key : "cc707547-ccf8-470d-b48e-50de0e4333e5", value : "8895"},
            {key : "00de50fe-0a29-445b-b8b8-d1206540c14c", value : "9522"},
            {key : "f333c869-0cc1-449d-9092-31881f2f565a", value : "9734"},
            {key : "9ff0a09e-29e3-4bdc-9856-638a4601348f", value : "10661"},
            {key : "eb0488c1-77cb-4784-9b6c-ee948fa05a53", value : "10767"},
            {key : "0f336b88-16ee-48ac-ba35-de00cb1650ec", value : "10768"},
            {key : "b9558330-749a-4939-8c0a-fd67147f3d3b", value : "10775"},
            {key : "b36aa927-ea47-4560-b333-ee6d2fa805c2", value : "10788"},
            {key : "15c0807c-0c2e-46bb-aa4f-3c0cc16282ce", value : "10800"},
            {key : "88b6b1f5-c69a-47e3-b842-657a30ea65f4", value : "11114"},
            {key : "77130dec-07f6-421b-bd17-736ac74236ac", value : "11238"},
            {key : "5f5d0d8a-ac82-4e3c-b9db-1fe21b8ce560", value : "11738"},
            {key : "7aac1412-53a1-405e-bb8b-ef46aa17c8bf", value : "11969"},
            {key : "6f678420-8013-4225-be4e-69e45decfb04", value : "12384"},
            {key : "a562bf8f-8315-4752-807d-f3549283db49", value : "12481"},
            {key : "efa968e5-7d5b-45af-8e4e-59971f3cf7b7", value : "12526"},
            {key : "19760419-4f14-4265-90d7-08f14dcdddbc", value : "12527"},
            {key : "e2bac196-8539-4917-b9e1-c0d3fb3b2768", value : "12532"},
            {key : "8abc3def-ad84-4194-ad72-70885e72ed3b", value : "13047"},
            {key : "50a9394a-c1ca-4db7-9922-583725438eb7", value : "13253"},
            {key : "b22a1762-2272-43fe-ae5b-631355f257c5", value : "13272"},
            {key : "5109b2f6-02e1-4295-b591-8c52f6c92220", value : "13700"},
            {key : "cb9340b9-a3eb-4d22-9fd6-152fd3ef8c61", value : "13712"},
            {key : "1cb160a3-56d7-4c68-b041-d80a3678ad37", value : "13847"},
            {key : "3ac3ac3a-d111-4f3f-a962-8910edb5193c", value : "13968"},
            {key : "8dcaa9f1-9953-4156-927d-f19fba750c32", value : "13982"},
            {key : "c43c1295-7949-480c-bd22-077bbaf75d9e", value : "14468"},
            {key : "2ac2311c-d0e9-4d59-87b3-f793064f037d", value : "14629"},
            {key : "854c716c-f3ab-470d-9049-c485e3b4f95b", value : "14805"},
            {key : "f0e6208d-a242-481d-b238-d6dce9d983c4", value : "17510"},
            {key : "3d256987-5ae2-4ee3-8c66-c97dbbd83f24", value : "17730"},
            {key : "5c800bcb-21a5-410e-a644-75965ceea2b1", value : "17961"},
            {key : "41c518b3-9eb1-4d5d-8cd4-76b8d34e1447", value : "18718"},
            {key : "8eab8cca-be91-428d-9660-57ceb70cb279", value : "18858"},
            {key : "60108f3d-efb1-4701-ad4e-3f8251c3c6f1", value : "19249"},
            {key : "c2f03c49-68c3-4a79-a721-cbf4a402c2af", value : "19680"},
            {key : "58fcc1ab-8023-4cfb-be07-1a40d3b0b81b", value : "19715"},
            {key : "28f91d3f-0fa1-4bbf-92e7-633561cb7956", value : "19734"},
            {key : "8201e4d7-9fc1-4345-ad8f-3e1ad17ecc34", value : "19736"},
            {key : "931543c2-d787-4c57-9722-ebd71997b030", value : "20020"},
            {key : "b57901f9-d306-4350-813b-1dcdeef3f5b5", value : "20490"},
            {key : "2485bf9e-2713-46fe-b6a6-ae270b9cecf1", value : "21070"},
            {key : "1c8fd7c6-593c-466e-b704-f3d19d64dde5", value : "22777"},
            {key : "07cf8c30-cbcf-4e22-85be-6453f832c4e1", value : "23073"},
            {key : "bc4b0c35-21e3-4c37-acf0-6a61cb203896", value : "23083"},
            {key : "534004a5-019c-4aa7-b732-098cde784b30", value : "23627"},
            {key : "5c2a73f3-ee6b-4db1-87d4-14eb8cb92e89", value : "23856"},
            {key : "b8bf66df-de99-4225-8d02-95c1329a43b6", value : "24244"},
            {key : "3d3a66a3-19ca-4f54-9fa0-e9501cd35054", value : "24549"},
            {key : "43e2d59b-2e9e-467f-8361-ec965efa1905", value : "26637"},
            {key : "0edb17a2-222b-4840-ae78-97952adfaa29", value : "26968"},
            {key : "21edc797-0c68-4fba-b8fa-3e845ae33b62", value : "27555"},
            {key : "78aa8f3a-dfde-47ee-9f99-c7c094c72f83", value : "27565"},
            {key : "2ee4b426-bd4c-4e73-9adb-a7920456921d", value : "27753"},
            {key : "2ea6713a-1f59-422b-b529-3ba95b403a97", value : "28535"},
            {key : "f01a9160-1f9b-4909-9a80-20b0ff3cc482", value : "28575"},
            {key : "2b28eae9-0a3b-4fa9-b759-3d22098494ff", value : "28654"},
            {key : "f7c95ca4-91e2-4d96-ba96-d3a11ed56aaf", value : "29098"},
            {key : "2a6e1a1d-7060-45a9-88a3-ca6048cefbdb", value : "29103"},
            {key : "0898fa04-153e-431a-8423-9c0f8f6c1846", value : "29853"},
            {key : "f1c616f9-4d25-48be-8345-86af1a4331f6", value : "30072"},
            {key : "0c4f7b53-173b-41b6-b3fa-0bacb03f69b6", value : "30131"},
            {key : "3b2cd868-f5a6-4a2e-9822-1b0328c75b95", value : "30343"},
            {key : "5af16388-6812-417b-b517-3cf82edc9747", value : "30484"},
            {key : "64276270-301e-4523-9918-9ac9249fe1a2", value : "30792"},
            {key : "3fc6e970-e941-488a-bd36-476ca0f848ae", value : "30800"},
            {key : "1919cac6-d6c1-4549-9f71-82a6d9b7d864", value : "30943"},
            {key : "097f8343-5146-4df2-8a69-415e4e120b50", value : "31249"},
            {key : "02f7416e-2a4a-4f37-b225-1e8cd3f726a9", value : "31559"},
            {key : "9c3da8c0-f251-4ad4-a6e3-702a1500fbba", value : "32080"},
            {key : "8267f258-adfb-456c-87e6-823684c3e715", value : "32164"},
            {key : "cfc7af98-5434-4b35-b10e-e516ad8dd115", value : "32173"},
            {key : "efa3d6f1-486f-4b5d-a577-fcab68a6297d", value : "32365"},
            {key : "8d1b3891-9404-4912-b9d5-5f3098c35462", value : "32854"},
            {key : "ed443506-c589-427a-a748-102ff7743e89", value : "33152"},
            {key : "dc508bc1-399c-43f5-b8f3-6cf23182ea63", value : "33560"},
            {key : "3fa7bcc2-0b36-49b3-adf3-2700cfb1ea60", value : "33568"},
            {key : "984d0f36-89f1-41d9-84b1-00bb756856a3", value : "36267"},
            {key : "78751c9f-586a-4f18-a50d-1bca62d11677", value : "36279"},
            {key : "8d36f6a9-6bab-4b9e-8c78-7755ac07c42f", value : "840678"},
            {key : "c74dfb74-7d64-4cc7-b8a5-e6be775a8b4f", value : "840812"},
            {key : "ed13addc-9d8c-4f0f-baf2-57e4287a0a67", value : "840990"},
            {key : "43d668ca-bfe0-4743-9f0f-1e3021724e51", value : "841459"},
            {key : "5687d4ea-6696-4873-b29f-1b24142edf11", value : "843069"},
            {key : "fc7736ad-6562-41f4-8b16-98c136ccb19d", value : "843510"},
            {key : "95930997-4085-4c97-b2f1-fee55a9f9b5a", value : "844519"},
            {key : "12542962-c20a-4455-96bb-27673528f5bf", value : "845392"},
            {key : "251e43f0-b3d9-4713-a414-2a7777bc28f3", value : "845394"},
            {key : "6362bab4-1ce8-42f3-8b22-340e4b372f3f", value : "847462"},
        ];

        for (var key in map) {
            // console.log("key:"+map[key].key+", value:"+map[key].value);
            if (url.indexOf(map[key].key) !== -1) {
                location.href = "/p/"+map[key].value+".html"
            }
        }
    }catch (err) {
        console.log(err)
    }
}
