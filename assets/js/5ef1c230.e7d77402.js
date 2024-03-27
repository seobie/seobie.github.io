"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5204],{4997:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>t});var r=n(4848),s=n(8453);const o={slug:"how-to-install-jekyll-on-m1-macbook",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",authors:"seob",tags:["errors","mac","m1","jekyll","apple","silicon","arm64"]},i=void 0,a={permalink:"/blog/how-to-install-jekyll-on-m1-macbook",editUrl:"https://github.com/seobie/seobie.github.io/tree/main/blog/2021/12/2021-12-13-how-to-install-jekyll-on-m1-macbook.md",source:"@site/blog/2021/12/2021-12-13-how-to-install-jekyll-on-m1-macbook.md",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",description:"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"errors",permalink:"/blog/tags/errors"},{label:"mac",permalink:"/blog/tags/mac"},{label:"m1",permalink:"/blog/tags/m-1"},{label:"jekyll",permalink:"/blog/tags/jekyll"},{label:"apple",permalink:"/blog/tags/apple"},{label:"silicon",permalink:"/blog/tags/silicon"},{label:"arm64",permalink:"/blog/tags/arm-64"}],readingTime:3.01,hasTruncateMarker:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"how-to-install-jekyll-on-m1-macbook",title:"M1 \ub9e5\uc5d0\uc11c jekyll \uc124\uce58\ud558\uae30",authors:"seob",tags:["errors","mac","m1","jekyll","apple","silicon","arm64"]},unlisted:!1,prevItem:{title:"[Error Log] M1 Chip Mac Bundle Install Error",permalink:"/blog/m1-chip-mac-bundle-install-error"},nextItem:{title:"[Error Log] ERR_PACKAGE_PATH_NOT_EXPORTED \uc5d0\ub7ec \ud574\uacb0",permalink:"/blog/err-package-path-not-exported"}},c={authorsImageUrls:[void 0]},t=[{value:"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e",id:"\uc5d0\ub7ec-\ubc1c\uacac-",level:2},{value:"\uc6d0\uc778?\ud83d\udca9",id:"\uc6d0\uc778",level:2},{value:"\ud574\uacb0 \ubc29\ubc95 \ud83d\udca1",id:"\ud574\uacb0-\ubc29\ubc95-",level:2},{value:"jekyll\uc744 \uc124\uce58\ud558\uae30 \uc804 \uba3c\uc800 \ud574\uc57c \ud558\ub294 \uac83\ub4e4",id:"jekyll\uc744-\uc124\uce58\ud558\uae30-\uc804-\uba3c\uc800-\ud574\uc57c-\ud558\ub294-\uac83\ub4e4",level:3},{value:"Xcode \uc124\uce58",id:"xcode-\uc124\uce58",level:4},{value:"Homebrew \uc124\uce58",id:"homebrew-\uc124\uce58",level:4},{value:"Rbenv \uc124\uce58",id:"rbenv-\uc124\uce58",level:4},{value:"ARM \uae30\ubc18 Ruby 3.0.0 \uc124\uce58",id:"arm-\uae30\ubc18-ruby-300-\uc124\uce58",level:4},{value:"ruby\uc640 gem \uacbd\ub85c\ub97c \uc258 \uc124\uc815\uc5d0 \ucd94\uac00\ud558\uae30",id:"ruby\uc640-gem-\uacbd\ub85c\ub97c-\uc258-\uc124\uc815\uc5d0-\ucd94\uac00\ud558\uae30",level:4},{value:"zsh\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"zsh\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",level:5},{value:"bash\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"bash\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",level:5},{value:"\ubb34\uc2a8 \uc258\uc744 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubaa8\ub974\uaca0\uc744\ub550?",id:"\ubb34\uc2a8-\uc258\uc744-\uc0ac\uc6a9\ud558\ub294\uc9c0-\ubaa8\ub974\uaca0\uc744\ub550",level:5},{value:"\ub4dc\ub514\uc5b4 Jekyll \uc124\uce58\ud558\uae30",id:"\ub4dc\ub514\uc5b4-jekyll-\uc124\uce58\ud558\uae30",level:4}];function h(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.h2,{id:"\uc5d0\ub7ec-\ubc1c\uacac-",children:"\uc5d0\ub7ec \ubc1c\uacac! \ud83d\udc7e"}),"\n",(0,r.jsx)(l.p,{children:"M1 \ub9e5\ubd81\uc5d0\uc11c jekyll\uc744 \uc124\uce58\ud558\ub824\ub2c8 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub2e4."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$ gem install jekyll\nSuccessfully installed jekyll-4.2.1\nParsing documentation for jekyll-4.2.1\nBefore reporting this, could you check that the file you're documenting\nhas proper syntax:\n\n  /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby -c lib/jekyll/commands/doctor.rb\n\nRDoc is not a full Ruby parser and will fail when fed invalid ruby programs.\n\nThe internal error was:\n\n  (NoMethodError) undefined method `[]' for nil:NilClass\n\nERROR:  While executing gem ... (NoMethodError)\n    undefined method `[]' for nil:NilClass\n"})}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h2,{id:"\uc6d0\uc778",children:"\uc6d0\uc778?\ud83d\udca9"}),"\n",(0,r.jsx)(l.p,{children:"M1 \uae30\ubc18 \ub9e5\uc740 ARM \uc544\ud0a4\ud14d\uccd0\uc778\ub370 \uc774\uac83\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc774\ub2e4. \ud83d\udc7b"}),"\n",(0,r.jsx)(l.hr,{}),"\n",(0,r.jsx)(l.h2,{id:"\ud574\uacb0-\ubc29\ubc95-",children:"\ud574\uacb0 \ubc29\ubc95 \ud83d\udca1"}),"\n",(0,r.jsx)(l.h3,{id:"jekyll\uc744-\uc124\uce58\ud558\uae30-\uc804-\uba3c\uc800-\ud574\uc57c-\ud558\ub294-\uac83\ub4e4",children:"jekyll\uc744 \uc124\uce58\ud558\uae30 \uc804 \uba3c\uc800 \ud574\uc57c \ud558\ub294 \uac83\ub4e4"}),"\n",(0,r.jsx)(l.h4,{id:"xcode-\uc124\uce58",children:"Xcode \uc124\uce58"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$xcode-select --install\n"})}),"\n",(0,r.jsx)(l.p,{children:"\ucd5c\uadfc\uc5d0 \ub9e5\ubd81\uc744 \uad6c\uc785\ud588\ub2e4\uba74 \uc544\uc9c1 Xcode\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc558\uc744 \uac83\uc774\ub2e4. Xcode\ub294 jekyll\uc744 \ud3ec\ud568\ud55c \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8\ub4e4\uc5d0 \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\ub2e4. \uad73\uc774 Xcode \uc790\uccb4\ub97c \uc124\uce58\ud560 \ud544\uc694\ub294 \uc5c6\uace0 CLT(Command Line Tools)\ub9cc \uc124\uce58\ud574\ub3c4 \ub41c\ub2e4\uace0 \ud55c\ub2e4."}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.a,{href:"https://atoz-develop.tistory.com/entry/%EB%A7%A5-CLTCommand-Line-Tools-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95Xcode-%EC%97%86%EC%9D%B4",children:"CLT \uc124\uce58 \ubc29\ubc95"})}),"\n",(0,r.jsx)(l.h4,{id:"homebrew-\uc124\uce58",children:"Homebrew \uc124\uce58"}),"\n",(0,r.jsxs)(l.p,{children:["\ub9cc\uc57d \uc544\uc9c1 ",(0,r.jsx)(l.a,{href:"https://brew.sh",children:"Homebrew"}),"\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74 \uc124\uce58\ud574\uc8fc\uc790."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:'$/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n",(0,r.jsx)(l.h4,{id:"rbenv-\uc124\uce58",children:"Rbenv \uc124\uce58"}),"\n",(0,r.jsx)(l.p,{children:"ARM \ud504\ub85c\uc138\uc11c\ub97c \uc9c0\uc6d0\ud558\ub294 \ub8e8\ube44 \ubc84\uc804\uc744 \uc124\uce58\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://github.com/rbenv/rbenv",children:"Rbenv README.md"})}),"\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"https://github.com/rbenv/ruby-build",children:"ruby-build README.md"})}),"\n"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$brew install rbenv ruby-build\n"})}),"\n",(0,r.jsx)(l.h4,{id:"arm-\uae30\ubc18-ruby-300-\uc124\uce58",children:"ARM \uae30\ubc18 Ruby 3.0.0 \uc124\uce58"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$rbenv install 3.0.0\n$rbenv global 3.0.0\n$ruby -v\n$rbenv rehash\n"})}),"\n",(0,r.jsx)(l.h4,{id:"ruby\uc640-gem-\uacbd\ub85c\ub97c-\uc258-\uc124\uc815\uc5d0-\ucd94\uac00\ud558\uae30",children:"ruby\uc640 gem \uacbd\ub85c\ub97c \uc258 \uc124\uc815\uc5d0 \ucd94\uac00\ud558\uae30"}),"\n",(0,r.jsx)(l.h5,{id:"zsh\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",children:"zsh\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$echo 'eval \"$(rbenv init - zsh)\"' >> ~/.zshrc\n"})}),"\n",(0,r.jsx)(l.h5,{id:"bash\ub97c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0",children:"bash\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$echo 'eval \"$(rbenv init - bash)\"' >> ~/.bash_profile\n"})}),"\n",(0,r.jsx)(l.h5,{id:"\ubb34\uc2a8-\uc258\uc744-\uc0ac\uc6a9\ud558\ub294\uc9c0-\ubaa8\ub974\uaca0\uc744\ub550",children:"\ubb34\uc2a8 \uc258\uc744 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubaa8\ub974\uaca0\uc744\ub550?"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$echo $SHELL\n/bin/zsh ## \uc800\ub294 zsh\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5b4\uc11c \uc774\ub807\uac8c \ub098\uc624\ub124\uc694!\n"})}),"\n",(0,r.jsx)(l.h4,{id:"\ub4dc\ub514\uc5b4-jekyll-\uc124\uce58\ud558\uae30",children:"\ub4dc\ub514\uc5b4 Jekyll \uc124\uce58\ud558\uae30"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$gem install jekyll bundler\n"})}),"\n",(0,r.jsxs)(l.p,{children:["\ub9cc\uc57d \uc124\uce58\uac00 \uc548\ub41c\ub2e4\uba74 \uc5d0\ub7ec\ub97c \uc798 \uc77d\uace0 ",(0,r.jsx)(l.code,{children:"sudo"})," \uad8c\ud55c\uc744 \uc55e\uc5d0 \ubd99\uc5ec\uc8fc\uc5b4\uc57c \ud558\ub294\uc9c0, \ud639\uc740 \ud2b9\uc815 \ubc84\uc804\uc744 \uc778\uc2a4\ud1a8 \ud558\uc9c0 \ubabb\ud588\ub294\uc9c0 \ud655\uc778\ud574\uc11c \uc5d0\ub7ec\uba54\uc138\uc9c0\uac00 \uc8fc\ub294 \ud78c\ud2b8\ub97c \uc798 \ub530\ub77c\uc624\uba74 \uacb0\uad6d \uc124\uce58\uac00 \ub420 \uac83\uc774\ub2e4..!"]}),"\n",(0,r.jsxs)(l.p,{children:["\uadf8\ub798\ub3c4 \uc548\ub41c\ub2e4\uba74 ",(0,r.jsx)(l.code,{children:"source /.~zshrc"})," \ub97c \ud574\ubcf4\uac70\ub098, ",(0,r.jsx)(l.code,{children:"rbenv rehash"})," \ub97c \uc2dc\ub3c4\ud574 \ubcfc \uc218\ub3c4 \uc788\uace0.."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-console",children:"$gem install bunlder\n$bundler install\n$bundle exec jekyll serve\n"})}),"\n",(0,r.jsxs)(l.p,{children:["\uc704\uc758 \uba85\ub839\uc5b4\ub97c \ucc28\ub840\ub300\ub85c \uc785\ub825\ud558\uace0 ",(0,r.jsx)(l.code,{children:"localhost:4000"}),"\uc5d0\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \ub85c\uceec\uc11c\ubc84\uac00 \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\ub2e4\uba74.."]}),"\n",(0,r.jsx)(l.p,{children:"\ubb38\uc81c \ud574\uacb0!! \ud83e\udd73"}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.a,{href:"https://www.earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/",children:"\ucc38\uc870"})})]})}function d(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(e){const l=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:l},e.children)}}}]);