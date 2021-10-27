
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','265'),
  exact: true,
},
{
  path: '/blog/first-blog-post',
  component: ComponentCreator('/blog/first-blog-post','609'),
  exact: true,
},
{
  path: '/blog/long-blog-post',
  component: ComponentCreator('/blog/long-blog-post','3cd'),
  exact: true,
},
{
  path: '/blog/mdx-blog-post',
  component: ComponentCreator('/blog/mdx-blog-post','9fd'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','cbb'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','10a'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','dc2'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','dda'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','cad'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','46e'),
  exact: true,
},
{
  path: '/docs/appendix-administrative-divisions',
  component: ComponentCreator('/docs/appendix-administrative-divisions','e1c'),
  exact: true,
},
{
  path: '/docs/appendix-jut-campus',
  component: ComponentCreator('/docs/appendix-jut-campus','fff'),
  exact: true,
},
{
  path: '/docs/appendix-teachers',
  component: ComponentCreator('/docs/appendix-teachers','1e6'),
  exact: true,
},
{
  path: '/docs/beijing/nhorizon',
  component: ComponentCreator('/docs/beijing/nhorizon','88b'),
  exact: true,
},
{
  path: '/docs/beijing/opera',
  component: ComponentCreator('/docs/beijing/opera','0c0'),
  exact: true,
},
{
  path: '/docs/beijing/opera-qa',
  component: ComponentCreator('/docs/beijing/opera-qa','46d'),
  exact: true,
},
{
  path: '/docs/beijing/wls',
  component: ComponentCreator('/docs/beijing/wls','01f'),
  exact: true,
},
{
  path: '/docs/childhood',
  component: ComponentCreator('/docs/childhood','3ea'),
  exact: true,
},
{
  path: '/docs/dz-recall',
  component: ComponentCreator('/docs/dz-recall','5d1'),
  exact: true,
},
{
  path: '/docs/dz-sf',
  component: ComponentCreator('/docs/dz-sf','d7a'),
  exact: true,
},
{
  path: '/docs/jut-1',
  component: ComponentCreator('/docs/jut-1','489'),
  exact: true,
},
{
  path: '/docs/shanghai',
  component: ComponentCreator('/docs/shanghai','6b6'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
