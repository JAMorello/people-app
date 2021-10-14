# Hard Working People - An App about people... or robots?

![HWP](/readme-assets/hwp-banner.jpg)

This is the repository of the [HWP App]().

Do you know our fabulous enterprise named "Hard Working People"? Yes? Awesome!
Do you know what kind of work we do, how we do it and who does it? Everything you are capable of thinking is the right answer! Except, obviously, the fact the all task are done by our incredible crew of superinteligent robots. Who need humans anyway? Humans need not apply. On the contrary, we "dispatch" them quickly.

In this web app you can meet our crew: go through a randomly generated list of our workers and check their stats. You can also create a team of workers and evaluate their efficiency. But remember! One side efect is that big task forces are very chaotic. With chaos levels through the roof, they can go in a spread killing instead of working!

This project uses the following libraries: [React](https://es.reactjs.org/) to create the web application user interfacte, [React Router](https://reactrouter.com/web/guides/quick-start) to implement dynamic routing and [Chakra-UI](https://chakra-ui.com/docs/getting-started) for the front-end of the app.

# Table of Contents

- [What kind of data is used?](#what-kind-of-data-is-used)
- [How the application looks like?](#how-the-application-looks-line)
- [Possible future implementations](#possible-future-implementations)

## What kind of data is used?

This web application uses randomly generated data retrieved from a mock API created from a schema at [Mockaroo](https://www.mockaroo.com/73781c90).

| Field Name | Data Type |
| 'id' | `Number` |
| 'color' | `String`, Hex Color |
| 'personal.avatar' | `String`, URL |
| 'personal.first_name' | `String` |
| 'personal.last_name' | `String` |
| 'personal.gender' | `String` |
| 'personal.catch_phrase' | `String` |
| 'work.job_title' | `String` |
| 'work.software' | `String` |
| 'work.city' | `String` |
| 'work.country' | `String` |
| 'work.email' | `String` |
| 'work.since_date' | `Date` (between 08/12/2000 and 08/12/2021)|
|'flavor.shower_freq'| `String` |
|'flavor.savings_acc'| `String` |
|'flavor.likes_to_eat'| `String` |
|'flavor.has_adiction'| `String` |
|'flavor.has_pet'| `String` |
|'flavor.humans_killed'| `Number` |
|'team.effectivity'| `Number`|
|'team.disturbance'| `Number` |
|'team.skill'| String[], between 2 and 5 elements|

The following is an example:

```
{
   "id":1,
   "color":"#441d21",
   "personal":{
      "avatar":"https://robohash.org/expeditaoccaecatiipsum.png?size=50x50&set=set1",
      "first_name":"Peggy",
      "last_name":"Cusiter",
      "gender":"Transmasculine",
      "catch_phrase":"Re-contextualized 4th generation knowledge user"
   },
   "work":{
      "job_title":"Nuclear Power Engineer",
      "software":"Home Ing",
      "city":"Benito Juarez",
      "country":"MX",
      "email":"pcusiter0@lulu.com",
      "since_date":"1/9/2001"
   },
   "flavor":{
      "shower_freq":"Yearly",
      "savings_acc":"$805.32",
      "likes_to_eat":"Plastic",
      "has_adiction":"Triclosan",
      "has_pet":"Seal, northern fur",
      "humans_killed":1531
   },
   "team":{
      "effectivity":79,
      "disturbance":10,
      "skill":[
         "AHLTA",
         "Sculpture"
      ]
   }
}
```

## How the application looks like?

The application generates randomly the data of 10 "workers", from whom the user can access on two sections in the menu: "Meet our workers" and "Ensemble a team".

![Meet our workers](/readme-assets/meet-menu.jpg)

In "Meet our workers" there is a carousel with three types of cards: short, normal and full. The center card is the normal one and displays a name, avatar, job title and catchphrase. At both sides there are a short card displaying only name, avatar and job title.

![Normal and short cards](/readme-assets/meet-workers.jpg)

Clicking at the "Know more!" button in the normal card open a modal window, that is the full card, which contains a pletora of information of the selected worker.

![Full card](/readme-assets/modal-worker.jpg)

In the "Ensemble a team" section, there are two main components: the team-effectivity-and-chaos-meter... I mean, a component from were the user can see the selected workers and their chaos/effectivity percentages. The overall chaos factor is the sum of the chaos factor of each worker of the team. The overall effectivity is the average of the effectivity of all workers of the team.

![Team](/readme-assets/team.jpg)

Below it there is a list of the randombly generated workers. Each one of them hast a row-item that contains: name, avatar, job title, skills and effectivity percentage. The chaos factor is hidden from the user: to see it one first has to add the worker to the team and calculate it manually. Pretty bothersome! Ther is also a "Add/Remove" button.

![Worker List](/readme-assets/list.jpg)

## Possible future implementations

For the moment, we have in mind only two posible implementations that could further improve the application:

- The first and foremost: make the app responsive. It only can be viewed properly with a minimum resolution width of 1024px.
- Another section/menu option could be added, in which other things could be done with the data from the mock api.
