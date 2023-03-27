<template>
  <div>
      <h2>商品审核发布</h2>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log("this.$x2js",this.$x2js);

      // let xmldemo = this.loadXML("./xmlFile/movie.xml");
      let xmlResourse = `<?xml version="1.0" encoding="utf-8"?>
        <note>
          <to>Tove</to>
          <from>Reminder</from>
        </note>
      `;

      let json= this.$x2js.xml2js(xmlResourse);
      console.log('########xml转json',json);

      let xml = this.$x2js.js2xml(json);
      console.log('+++++++++json转xml',xml)

  //  let xmlstr = `<?xml version="1.0" encoding="UTF-8"?>
  //         <note>
  //         <to>Tove</to>
  //         <from>Jani</from> 
  //         <heading>Reminder</heading>
  //         <body>Don't forget me this weekend!</body>
  //         </note>`;
  //   let url = window.URL.createObjectURL(
  //     new Blob([xmlstr], { type: "text/xml" })
  //   );
  //   console.log('9999',url);
  //   // 然后就可以创建a标签 最后下载下来了
  //   let link = document.createElement("a");
  //   // 不显示链接
  //   link.style.display = "none";
  //   link.href = url;
  //   // 设置链接属性
  //   link.setAttribute("download", "xmlstr");
  //   //点击链接
  //   document.body.appendChild(link);
  //   link.click();
    
  },

  methods: {
      //创建xmldom对象
 
      loadXML(xmlFile) {
          var xmlDom = null;
          try {
              //xmlhttp方式，支持火狐、chrome、oprea等浏览器，但不可跨域
              var xmlhttp = new window.XMLHttpRequest();
              xmlhttp.open("GET", xmlFile, false);
              xmlhttp.send(null);
              if (xmlhttp.status == 200) {
                  xmlDom = xmlhttp.responseXML;
                  console.log('***',xmlDom);
              } else {
                  //传入的是XML字符串而非XML地址时非IE浏览器处理
                  var parseXml = new DOMParser();
                  var xmlDom = parseXml.parseFromString(xmlFile, "text/xml");
                  // console.log('+++',xmlDom);
              }
          } catch (ex) {
              //传入的是XML字符串而非XML地址时非IE浏览器处理
              var parseXml = new DOMParser();
              var xmlDom = parseXml.parseFromString(xmlFile, "text/xml");

          }
          return xmlDom;
      }
  },
}
</script>

<style>

</style>