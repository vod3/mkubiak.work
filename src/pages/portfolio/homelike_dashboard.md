---
path: '/portfolio/homelike_dashboard'
date: '2019-01-28'
title: 'Dashboard'
subtitle: 'Homelike UI Redesign'
type: 'portfolio'
image: '../../images/work/homelike_dashboard_head.png'
headerColor: 'linear-gradient(-179deg, #52A6E3 0%, #6699CC 100%);'
headerMaxWidth: '1000px'
featured: false
---

This was a tough one. The homelike application is a very powerful and feature-rich tool which gives the user the overview to manage all requests, bookings and other apartment related topics. Everything is reachable within a few clicks and fully functional on mobile screens. In order to support the user with his tasks, everything is designed to follow a guiding navigation structure.

### Dashboard – Before

In the old version there were several issues with the overview in the tables. If the users wanted to see more details in one booking, the tablecell opened itself vertically, pushing all other entries outside of the screenview. Furthermore, the horizontal alignment of the details made a mobile version of the Dashboard nearlly impossible. So a completly new design was made from scratch with mobile experience in mind.

![old_dashboard](../../images/work/old_4.jpg)

I started with the global navigation on the left side. While the classical layout with the header on top, navigation on the left and content right offers easy and fast understanding of the application, the space for the content gets limited by the fixed width of the left navigation, especially on small desktops. We use a lot of tables with more than 5 columns, so we need as much space as possible horizontally. For this I placed the navigation on top of the whole page and made it scale horizontally. It is the first thing the user perceives when reading from top to bottom, so we support the hierachy of the page content by using a top-placed navigation.

![old_navigation](../../images/work/new_navigation.png)

Now to the tables, they are for the most part the main content of the whole application. I emphasise this by placing them on a white background, while the rest of the dashboard gets a light gray background to communicate the visual hierachy of the User Interface.<br>
Between the main navigation and white table there is a headline with a description to tell the user what can be achieved on the current page. In addition to that there is a small tab navigation, which serves as the second hierachy level for the content over the white background.<br>
I was very careful with the use of colors, because I wanted to guide the user trough the whole application to the main purpose of the current view, the Call-To-Action. There is always one very prominent button which in most cases is the most important task. You can see it here on the top right corner of the table.

![dashboard_blockframe](../../images/work/dashboard_blogframe.png)
