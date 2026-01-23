# website
The Cloud Native Rejekts website

### Announcements

You can add announcements to the `content/announcements` folder by creating a file, e.g.
`2022-03-11-my-announcement.md`, with content like:

```
---
title: My first Announcement
draft: false
date: 2022-03-01
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas. Tempus imperdiet nulla malesuada pellentesque elit eget. Proin sed libero enim sed faucibus turpis. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Condimentum lacinia quis vel eros donec. Viverra ipsum nunc aliquet bibendum. Sed risus ultricies tristique nulla aliquet enim tortor at. Varius duis at consectetur lorem donec massa. Netus et malesuada fames ac. Amet justo donec enim diam vulputate ut. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Ut aliquam purus sit amet luctus venenatis lectus.
```

## Testing

You should always test your changes locally before creating a pull request.

### Testing locally

To test locally run the following command.

`make run`

The above command will run a server with the the site available at `http://localhost:1313`. It will also watch for any changes made to the site and regenerate and reload the site when changes are detected. In addition, it disables some caching that can sometimes have confusing results.
