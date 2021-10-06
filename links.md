---
layout: page
title: 茶香-Links
permalink: /links/
---

- 数字电路

  [简单CPU设计实践](https://lianera.github.io/post/2014/cpu-step-by-step/)

- Management

  [Gabriel Anderbjörk](http://gabriel.anderbjork.se/index.htm)
  
- AI

  [TensorFlow Install On Mac](https://www.tensorflow.org/install/install_mac) -
  [Neuroph](http://neuroph.sourceforge.net/)

- 3GPP规范

  [ftp://ftp.3gpp.org/Specs/archive/](ftp://ftp.3gpp.org/Specs/archive/)

- TextEdit

  [Seven habits of effective text editing](http://www.moolenaar.net/habits.html) -
  [Vim Help](http://vimcdoc.sourceforge.net/doc/help.html) -
  [Vim IDE](https://www.cnblogs.com/zhangsf/archive/2013/06/13/3134409.html) -
  [Cscope](http://cscope.sourceforge.net/) -
  [Ctags](http://ctags.sourceforge.net/)
  
- ~~Makefile~~ need change to cmake

  [Makefile经典教程](http://blog.csdn.net/ruglcc/article/details/7814546/)
  
- 无线通信

  [OAI入门](blog.csdn.net/jxwxg/article/details/58130893) - 
  [openairinterface5g](https://gitlab.eurecom.fr/oai/openairinterface5g) -
  [中国通信网](http://www.c114.com.cn/) -
  [open-cells](https://open-cells.com)

- 科学技术

  [科技部](http://www.most.gov.cn)

- 咨询公司

  [IHS](https://ihsmarkit.com/index.html)   

<script>
    $(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://cardbang.com/BlogCounter/counteradd.php",
        data: {title: "{{ page.title }}", url: "{{ page.url }}"},
        datatype: "html",

        success: function (data) {
        },
        error: function () {
        }
    });
});
</script>