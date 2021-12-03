const bcrypt = require('bcrypt');

exports.seed = async (knex) => { 

    await knex('users').insert(
      {username: 'root', email: 'root@try.com', password: await bcrypt.hash("root1234", 10)}
    )

    await knex('statusinfo').insert([
      {statuscode: 'R', name: 'Requested'},
      {statuscode: 'A', name: 'Accepted'},
      {statuscode: 'D', name: 'Declined'}
    ]);

    await knex('main').insert([
      {name: 'Computer science', sub_name: 'Computer science', description: "Here we talk about cs topics"},
      {name: 'Travel', sub_name: 'Travel', description: "Here we talk about travels"},
      {name: 'Languages', sub_name: 'Languages', description: "Here we talk about languages"},
      {name: 'Food', sub_name: 'Food', description: "Here we talk about food"}
    ])

    const userInfo = await knex.select('id_user').from('users').where('email', 'root@try.com');

    const mainCs = await knex.select('id_main').from('main').where('name', 'Computer science');

    await knex('thread').insert([
      { name: 'My first post', subject: 'computer science', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, this is my first post', id_main: mainCs[0].id_main },
      { name: 'Which language would suggest me?', subject: 'computer science', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, suggest me a new progtamming language to learn', id_main: mainCs[0].id_main },
      { name: 'Do you like golang?', subject: 'computer science', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, do you like golang language?', id_main: mainCs[0].id_main },
      { name: 'What is Scrum', subject: 'computer science', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, may you explain me what is Scrum?', id_main: mainCs[0].id_main },
    ])

    const mainTravel = await knex.select('id_main').from('main').where('name', 'Travel');

    await knex('thread').insert([
      { name: 'Do you prefer Italy or France?', subject: 'travels', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, do you prefer to visit Italy or France?', id_main: mainTravel[0].id_main },
      { name: 'Good restaurants in Spain?', subject: 'travels', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, could you suggest me some good restaurants in Spain?', id_main: mainTravel[0].id_main },
      { name: 'Have you ever been in Hungary?', subject: 'travels', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, how is Hungary, would you suggest me to visit it?', id_main: mainTravel[0].id_main }
    ])

    const mainLanguage = await knex('id_main').from('main').where('name', 'Languages');

    await knex('thread').insert([
      { name: 'How to learn german', subject: 'languages', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, how did you learn german language?', id_main: mainLanguage[0].id_main },
      { name: 'How to learn italian', subject: 'languages', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, how did you learn italian language?', id_main: mainLanguage[0].id_main },
      { name: 'How to learn french', subject: 'languages', id_user: userInfo[0].id_user, thread_message: 'Hi everyone, how did you learn french language?', id_main: mainLanguage[0].id_main }
    ])

    const threadIdOne = await knex('id_thread').from('thread').where('name', 'Do you like golang?');

    const threadIdTwo = await knex('id_thread').from('thread').where('name', 'Do you prefer Italy or France?');

    const threadIdThree = await knex('id_thread').from('thread').where('name', 'How to learn french');

    await knex('post').insert([
      { message: "Hi, yes I do. Golang is pretty fast", id_user: userInfo[0].id_user, id_thread: threadIdOne[0].id_thread },
      { message: "Hi, I prefer Italy", id_user: userInfo[0].id_user, id_thread: threadIdTwo[0].id_thread },
      { message: "Hi, I suggest you to use text book for exercises and watch a lot of films and series in native language", id_user: userInfo[0].id_user, id_thread: threadIdThree[0].id_thread }
    ])

};