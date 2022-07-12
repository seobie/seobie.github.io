"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2755],{3905:function(e,l,n){n.d(l,{Zo:function(){return c},kt:function(){return b}});var t=n(7294);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function a(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var l=t.useContext(s),n=l;return e&&(n="function"==typeof e?e(l):o(o({},l),e)),n},c=function(e){var l=u(e.components);return t.createElement(s.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},m=t.forwardRef((function(e,l){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,k=m["".concat(s,".").concat(b)]||m[b]||p[b]||a;return n?t.createElement(k,o(o({ref:l},c),{},{components:n})):t.createElement(k,o({ref:l},c))}));function b(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in l)hasOwnProperty.call(l,s)&&(i[s]=l[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1745:function(e,l,n){n.r(l),n.d(l,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var t=n(3117),r=(n(7294),n(3905));const a={slug:"how-to-install-jekyll-on-m1-macbook",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",authors:"seob",tags:["errors","mac","m1","jekyll","apple","silicon","arm64"]},o=void 0,i={permalink:"/blog/how-to-install-jekyll-on-m1-macbook",editUrl:"https://github.com/seobie/seobie.github.io/tree/main/blog/2021/12/2021-12-13-how-to-install-jekyll-on-m1-macbook.md",source:"@site/blog/2021/12/2021-12-13-how-to-install-jekyll-on-m1-macbook.md",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",description:"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"errors",permalink:"/blog/tags/errors"},{label:"mac",permalink:"/blog/tags/mac"},{label:"m1",permalink:"/blog/tags/m-1"},{label:"jekyll",permalink:"/blog/tags/jekyll"},{label:"apple",permalink:"/blog/tags/apple"},{label:"silicon",permalink:"/blog/tags/silicon"},{label:"arm64",permalink:"/blog/tags/arm-64"}],readingTime:3.01,hasTruncateMarker:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"how-to-install-jekyll-on-m1-macbook",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",authors:"seob",tags:["errors","mac","m1","jekyll","apple","silicon","arm64"]},prevItem:{title:"[Error Log] M1 Chip Mac Bundle Install Error",permalink:"/blog/m1-chip-mac-bundle-install-error"},nextItem:{title:"[Error Log] ERR_PACKAGE_PATH_NOT_EXPORTED \uc5d0\ub7ec \ud574\uacb0",permalink:"/blog/err-package-path-not-exported"}},s={authorsImageUrls:[void 0]},u=[{value:"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e",id:"\uc5d0\ub7ec-\ubc1c\uacac-",level:2},{value:"\uc6d0\uc778?\ud83d\udca9",id:"\uc6d0\uc778",level:2},{value:"\ud574\uacb0 \ubc29\ubc95 \ud83d\udca1",id:"\ud574\uacb0-\ubc29\ubc95-",level:2},{value:"jekyll\uc744 \uc124\uce58\ud558\uae30 \uc804 \uba3c\uc800 \ud574\uc57c \ud558\ub294 \uac83\ub4e4",id:"jekyll\uc744-\uc124\uce58\ud558\uae30-\uc804-\uba3c\uc800-\ud574\uc57c-\ud558\ub294-\uac83\ub4e4",level:3},{value:"Xcode \uc124\uce58",id:"xcode-\uc124\uce58",level:4},{value:"Homebrew \uc124\uce58",id:"homebrew-\uc124\uce58",level:4},{value:"Rbenv \uc124\uce58",id:"rbenv-\uc124\uce58",level:4},{value:"ARM \uae30\ubc18 Ruby 3.0.0 \uc124\uce58",id:"arm-\uae30\ubc18-ruby-300-\uc124\uce58",level:4},{value:"ruby\uc640 gem \uacbd\ub85c\ub97c \uc258 \uc124\uc815\uc5d0 \ucd94\uac00\ud558\uae30",id:"ruby\uc640-gem-\uacbd\ub85c\ub97c-\uc258-\uc124\uc815\uc5d0-\ucd94\uac00\ud558\uae30",level:4},{value:"zsh\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"zsh\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",level:5},{value:"bash\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"bash\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",level:5},{value:"\ubb34\uc2a8 \uc258\uc744 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubaa8\ub974\uaca0\uc744\ub550?",id:"\ubb34\uc2a8-\uc258\uc744-\uc0ac\uc6a9\ud558\ub294\uc9c0-\ubaa8\ub974\uaca0\uc744\ub550",level:5},{value:"\ub4dc\ub514\uc5b4 Jekyll \uc124\uce58\ud558\uae30",id:"\ub4dc\ub514\uc5b4-jekyll-\uc124\uce58\ud558\uae30",level:4}],c={toc:u};function p(e){let{components:l,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uc5d0\ub7ec-\ubc1c\uacac-"},"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e"),(0,r.kt)("p",null,"M1 \ub9e5\ubd81\uc5d0\uc11c jekyll\uc744 \uc124\uce58\ud558\ub824\ub2c8 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ gem install jekyll\nSuccessfully installed jekyll-4.2.1\nParsing documentation for jekyll-4.2.1\nBefore reporting this, could you check that the file you're documenting\nhas proper syntax:\n\n  /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby -c lib/jekyll/commands/doctor.rb\n\nRDoc is not a full Ruby parser and will fail when fed invalid ruby programs.\n\nThe internal error was:\n\n  (NoMethodError) undefined method `[]' for nil:NilClass\n\nERROR:  While executing gem ... (NoMethodError)\n    undefined method `[]' for nil:NilClass\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc6d0\uc778"},"\uc6d0\uc778?\ud83d\udca9"),(0,r.kt)("p",null,"M1 \uae30\ubc18 \ub9e5\uc740 ARM \uc544\ud0a4\ud14d\uccd0\uc778\ub370 \uc774\uac83\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc774\ub2e4. \ud83d\udc7b"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ud574\uacb0-\ubc29\ubc95-"},"\ud574\uacb0 \ubc29\ubc95 \ud83d\udca1"),(0,r.kt)("h3",{id:"jekyll\uc744-\uc124\uce58\ud558\uae30-\uc804-\uba3c\uc800-\ud574\uc57c-\ud558\ub294-\uac83\ub4e4"},"jekyll\uc744 \uc124\uce58\ud558\uae30 \uc804 \uba3c\uc800 \ud574\uc57c \ud558\ub294 \uac83\ub4e4"),(0,r.kt)("h4",{id:"xcode-\uc124\uce58"},"Xcode \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$xcode-select --install\n")),(0,r.kt)("p",null,"\ucd5c\uadfc\uc5d0 \ub9e5\ubd81\uc744 \uad6c\uc785\ud588\ub2e4\uba74 \uc544\uc9c1 Xcode\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc558\uc744 \uac83\uc774\ub2e4. Xcode\ub294 jekyll\uc744 \ud3ec\ud568\ud55c \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8\ub4e4\uc5d0 \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\ub2e4. \uad73\uc774 Xcode \uc790\uccb4\ub97c \uc124\uce58\ud560 \ud544\uc694\ub294 \uc5c6\uace0 CLT(Command Line Tools)\ub9cc \uc124\uce58\ud574\ub3c4 \ub41c\ub2e4\uace0 \ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://atoz-develop.tistory.com/entry/%EB%A7%A5-CLTCommand-Line-Tools-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95Xcode-%EC%97%86%EC%9D%B4"},"CLT \uc124\uce58 \ubc29\ubc95")),(0,r.kt)("h4",{id:"homebrew-\uc124\uce58"},"Homebrew \uc124\uce58"),(0,r.kt)("p",null,"\ub9cc\uc57d \uc544\uc9c1 ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),"\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc124\uce58\ud574\uc8fc\uc790."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("h4",{id:"rbenv-\uc124\uce58"},"Rbenv \uc124\uce58"),(0,r.kt)("p",null,"ARM \ud504\ub85c\uc138\uc11c\ub97c \uc9c0\uc6d0\ud558\ub294 \ub8e8\ube44 \ubc84\uc804\uc744 \uc124\uce58\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rbenv/rbenv"},"Rbenv README.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rbenv/ruby-build"},"ruby-build README.md"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$brew install rbenv ruby-build\n")),(0,r.kt)("h4",{id:"arm-\uae30\ubc18-ruby-300-\uc124\uce58"},"ARM \uae30\ubc18 Ruby 3.0.0 \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$rbenv install 3.0.0\n$rbenv global 3.0.0\n$ruby -v\n$rbenv rehash\n")),(0,r.kt)("h4",{id:"ruby\uc640-gem-\uacbd\ub85c\ub97c-\uc258-\uc124\uc815\uc5d0-\ucd94\uac00\ud558\uae30"},"ruby\uc640 gem \uacbd\ub85c\ub97c \uc258 \uc124\uc815\uc5d0 \ucd94\uac00\ud558\uae30"),(0,r.kt)("h5",{id:"zsh\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0"},"zsh\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$echo 'eval \"$(rbenv init - zsh)\"' >> ~/.zshrc\n")),(0,r.kt)("h5",{id:"bash\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0"},"bash\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$echo 'eval \"$(rbenv init - bash)\"' >> ~/.bash_profile\n")),(0,r.kt)("h5",{id:"\ubb34\uc2a8-\uc258\uc744-\uc0ac\uc6a9\ud558\ub294\uc9c0-\ubaa8\ub974\uaca0\uc744\ub550"},"\ubb34\uc2a8 \uc258\uc744 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubaa8\ub974\uaca0\uc744\ub550?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$echo $SHELL\n/bin/zsh ## \uc800\ub294 zsh\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5b4\uc11c \uc774\ub807\uac8c \ub098\uc624\ub124\uc694!\n")),(0,r.kt)("h4",{id:"\ub4dc\ub514\uc5b4-jekyll-\uc124\uce58\ud558\uae30"},"\ub4dc\ub514\uc5b4 Jekyll \uc124\uce58\ud558\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$gem install jekyll bundler\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \uc124\uce58\uac00 \uc548\ub41c\ub2e4\uba74 \uc5d0\ub7ec\ub97c \uc798 \uc77d\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," \uad8c\ud55c\uc744 \uc55e\uc5d0 \ubd99\uc5ec\uc8fc\uc5b4\uc57c \ud558\ub294\uc9c0, \ud639\uc740 \ud2b9\uc815 \ubc84\uc804\uc744 \uc778\uc2a4\ud1a8 \ud558\uc9c0 \ubabb\ud588\ub294\uc9c0 \ud655\uc778\ud574\uc11c \uc5d0\ub7ec\uba54\uc138\uc9c0\uac00 \uc8fc\ub294 \ud78c\ud2b8\ub97c \uc798 \ub530\ub77c\uc624\uba74 \uacb0\uad6d \uc124\uce58\uac00 \ub420 \uac83\uc774\ub2e4..!"),(0,r.kt)("p",null,"\uadf8\ub798\ub3c4 \uc548\ub41c\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"source /.~zshrc")," \ub97c \ud574\ubcf4\uac70\ub098, ",(0,r.kt)("inlineCode",{parentName:"p"},"rbenv rehash")," \ub97c \uc2dc\ub3c4\ud574 \ubcfc \uc218\ub3c4 \uc788\uace0.."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$gem install bunlder\n$bundler install\n$bundle exec jekyll serve\n")),(0,r.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc5b4\ub97c \ucc28\ub840\ub300\ub85c \uc785\ub825\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:4000"),"\uc5d0\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \ub85c\uceec\uc11c\ubc84\uac00 \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\ub2e4\uba74.."),(0,r.kt)("p",null,"\ubb38\uc81c \ud574\uacb0!! \ud83e\udd73"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/"},"\ucc38\uc870")))}p.isMDXComponent=!0}}]);