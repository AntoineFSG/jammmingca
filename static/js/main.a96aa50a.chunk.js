(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),s=a.n(c),i=a(10),o=a.n(i),l=a(11),u=a(2),h=a(3),m=a(5),p=a(4),d=a(1),f=a(6),v=a(7),k=a.n(v),y=a(8),g="https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&scope=user-read-email&client_id=".concat("25186fdc28194408a0165e48a92f065c","&redirect_uri=").concat("http://localhost:3000/"),b={loggedIn:!0,tokenRegex:new RegExp("access_token"),userName:void 0,checkAccessToken:function(){null!==window.location.href.match(b.tokenRegex)?b.loggedIn=!0:b.loggedIn=!1;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);return void 0!==n?n:e&&t?(n=e[1],r=t[1],window.setTimeout(function(){return n=""},1e3*r),window.history.pushState("Access Token",null,"/"),n):void 0},getAccessToken:function(){var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);return void 0!==n?n:e&&t?(n=e[1],r=t[1],window.setTimeout(function(){return n=""},1e3*r),window.history.pushState("Access Token",null,"/"),n):void(window.location=g)},getLoggedOut:function(){b.loggedIn=!1,n=void 0,r=void 0,window.location.assign("https://accounts.spotify.com/logout")},getUserName:function(){var e=Object(y.a)(k.a.mark(function e(){var t,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("get user name fires"),"https://api.spotify.com/v1/me",t={Authorization:"Bearer ".concat(n)},a=void 0,e.next=6,fetch("https://api.spotify.com/v1/me",{headers:t}).then(function(e){return e.json()}).then(function(e){return a=e.display_name}).then(function(){return console.log("userName "+a),b.userName=a});case 6:a=e.sent;case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),search:function(e){var t="https://api.spotify.com/v1/search?type=track&q=".concat(e.replace(" ","%20"));return fetch(t,{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){return e.json()}).then(function(e){return e.tracks?e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}):[]})},savePlaylist:function(e,t){if(e&&t&&0!==t.length){var a={Authorization:"Bearer ".concat(n)},r=void 0,c=void 0;fetch("https://api.spotify.com/v1/me",{headers:a}).then(function(e){return e.json()}).then(function(e){return r=e.id}).then(function(){console.log("userID "+r);var n="https://api.spotify.com/v1/users/".concat(r,"/playlists");fetch(n,{method:"POST",headers:a,body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){return c=e.id}).then(function(){var e="https://api.spotify.com/v1/users/".concat(r,"/playlists/").concat(c,"/tracks");fetch(e,{method:"POST",headers:a,body:JSON.stringify({uris:t})})})})}}},O=b,j=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={term:""},a.search=a.search.bind(Object(d.a)(a)),a.handleTermChange=a.handleTermChange.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Type..."}),s.a.createElement("button",{onClick:this.search},"Search"))}}]),t}(s.a.Component)),N=(a(20),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).addTrack=a.addTrack.bind(Object(d.a)(a)),a.removeTrack=a.removeTrack.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"renderAction",value:function(){return this.props.onAdd?s.a.createElement("a",{className:"Track-action",onClick:this.addTrack},"+"):s.a.createElement("a",{className:"Track-action",onClick:this.removeTrack},"-")}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Track"},s.a.createElement("div",{className:"Track-information"},s.a.createElement("h3",null,this.props.track.name),s.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),t}(s.a.Component)),T=(a(21),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TrackList"},this.props.tracks.map(function(t){return s.a.createElement(N,{key:t.id,track:t,onRemove:e.props.onRemove,onAdd:e.props.onAdd})}))}}]),t}(s.a.Component)),w=(a(22),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"SearchResults"},s.a.createElement("h2",null,"Results"),s.a.createElement(T,{tracks:this.props.searchResults,onAdd:this.props.onAdd}))}}]),t}(s.a.Component)),E=(a(23),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Playlist"},s.a.createElement("input",{defaultValue:this.props.name,onChange:this.handleNameChange}),s.a.createElement(T,{tracks:this.props.tracks,onRemove:this.props.onRemove}),s.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(s.a.Component)),C=(a(24),a(25),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={userName:"Jean Pate"},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUserName();case 2:this.setState({userName:O.userName}),console.log(this.state.userName);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===O.loggedIn?s.a.createElement("div",null,s.a.createElement("div",{className:"spotify-welcome"},"Welcome ",this.state.userName),s.a.createElement("button",{className:"spotify-style",onClick:this.props.handleClick},"Log Out"," ",s.a.createElement("img",{className:"spotify-logo",src:"./img/Spotify_Icon_RGB_Green.png"}))):s.a.createElement("button",{className:"spotify-style",onClick:this.props.handleClick},"Login with",s.a.createElement("img",{className:"spotify-logo",src:"./img/Spotify_Logo_RGB_Green.png"}))}}]),t}(s.a.Component));O.checkAccessToken();var S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={userName:"John Doe",searchResults:[],playlistName:"Name your playlist",playlistTracks:[],loggedIn:!1},a.addTrack=a.addTrack.bind(Object(d.a)(a)),a.removeTrack=a.removeTrack.bind(Object(d.a)(a)),a.updatePlaylistName=a.updatePlaylistName.bind(Object(d.a)(a)),a.savePlaylist=a.savePlaylist.bind(Object(d.a)(a)),a.search=a.search.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"addTrack",value:function(e){this.state.playlistTracks.find(function(t){return t.id===e.id})||this.setState(function(t){return{playlistTracks:[].concat(Object(l.a)(t.playlistTracks),[e])}})}},{key:"removeTrack",value:function(e){var t=this,a=this.state.playlistTracks.indexOf(e);this.setState(function(){return{playlistTracks:t.state.playlistTracks.filter(function(e,t){return t!==a})}})}},{key:"savePlaylist",value:function(){var e=this.state.playlistTracks.map(function(e){return e.uri});O.savePlaylist(this.state.playlistName,e),this.setState({searchResults:[]}),this.updatePlaylistName("My playlist")}},{key:"search",value:function(e){var t=this;O.search(e).then(function(e){return t.setState({searchResults:e})})}},{key:"handleClick",value:function(){!0!==O.loggedIn?O.getAccessToken():O.getLoggedOut()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Ja",s.a.createElement("span",{className:"highlight"},"mmm"),"ing"),s.a.createElement("div",{className:"App"},s.a.createElement(C,{handleClick:this.handleClick,userName:this.state.userName}),s.a.createElement(j,{onSearch:this.search}),s.a.createElement("div",{className:"App-playlist"},s.a.createElement(w,{searchResults:this.state.searchResults,onAdd:this.addTrack}),s.a.createElement(E,{name:this.state.playlistName,tracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),t}(s.a.Component);o.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/jammingca","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}],[[12,1,2]]]);
//# sourceMappingURL=main.a96aa50a.chunk.js.map