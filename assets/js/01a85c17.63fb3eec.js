"use strict";(self.webpackChunksanyangriver=self.webpackChunksanyangriver||[]).push([[13],{5601:function(e,a,t){t.d(a,{Z:function(){return g}});var r=t(7294),n=t(6010),l=t(6742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",o="sidebarItemLinkActive_12pM";function g(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("div",{className:(0,n.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:i},a.title),r.createElement("ul",{className:c},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:o},e.title))}))))}},94:function(e,a,t){t.r(a);var r=t(7294),n=t(9118),l=t(6742),s=t(5601),i=t(4973),c=t(9732);a.default=function(e){var a=e.tags,t=e.sidebar,m={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);m[a]=m[a]||[],m[a].push(e)}));var u=Object.entries(m).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],n=e[1];return r.createElement("div",{key:t},r.createElement("h3",null,t),n.map((function(e){return r.createElement(l.Z,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(n.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(s.Z,{sidebar:t})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(i.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),r.createElement("div",{className:"margin-vert--lg"},u)))))}}}]);