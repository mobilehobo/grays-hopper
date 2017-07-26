'use strict';

const db = require('APP/db'),
  { Cart, Beer, Tag, BeerTag, User, Thing, Favorite, ParentCompany, Promise } = db,
  { mapValues } = require('lodash');

function seedEverything() {
  const seeded = {
    things: things(),
    tags: tags(),
    parentCompany: parentCompany()
  };

  seeded.beers = beers(seeded);
  seeded.users = users(seeded);
  seeded.favorites = favorites(seeded);
  seeded.beerTags = beerTags(seeded);
  seeded.carts = carts(seeded);

  return Promise.props(seeded);
}

const beerTags = seed(BeerTag, ({ beers, tags }) => ({
  'jaque is sweet': {
    beer_id: beers.jaque.id,
    tag_id: tags.sweet.id
  },
  'jaque is hoppy': {
    beer_id: beers.jaque.id,
    tag_id: tags.hoppy.id
  },
  'jaque is dry': {
    beer_id: beers.jaque.id,
    tag_id: tags.crisp.id
  },
  'jaque2 is bitter': {
    beer_id: beers.jaque2.id,
    tag_id: tags.bitter.id
  },
  'jaque2 is clean': {
    beer_id: beers.jaque2.id,
    tag_id: tags.clean.id
  },
  'jaque3 is sour': {
    beer_id: beers.jaque3.id,
    tag_id: tags.sour.id
  },
  'jaque3 is heavy': {
    beer_id: beers.jaque3.id,
    tag_id: tags.heavy.id
  },
  'jaque4 is malty': {
    beer_id: beers.jaque4.id,
    tag_id: tags.malty.id
  },
  'jaque4 is crisp': {
    beer_id: beers.jaque4.id,
    tag_id: tags.crisp.id
  },
  'jaque5 is hoppy': {
    beer_id: beers.jaque5.id,
    tag_id: tags.hoppy.id
  },
  'jaque5 is light': {
    beer_id: beers.jaque5.id,
    tag_id: tags.light.id
  },
  'jaque6 is dark': {
    beer_id: beers.jaque6.id,
    tag_id: tags.dark.id
  },
  'jaque6 is tart': {
    beer_id: beers.jaque6.id,
    tag_id: tags.tart.id
  },
  'jaque7 is spicy': {
    beer_id: beers.jaque7.id,
    tag_id: tags.spicy.id
  },
  'jaque7 is fruity': {
    beer_id: beers.jaque7.id,
    tag_id: tags.fruity.id
  },
  'jaque8 is roasty': {
    beer_id: beers.jaque8.id,
    tag_id: tags.roasty.id
  },
  'jaque8 is malty': {
    beer_id: beers.jaque8.id,
    tag_id: tags.malty.id
  },
  'jaque9 is sweet': {
    beer_id: beers.jaque9.id,
    tag_id: tags.sweet.id
  },
  'jaque9 is smokey': {
    beer_id: beers.jaque9.id,
    tag_id: tags.smokey.id
  },
  'jaque10 is dark': {
    beer_id: beers.jaque10.id,
    tag_id: tags.dark.id
  },
  'jaque10 is bitter': {
    beer_id: beers.jaque10.id,
    tag_id: tags.bitter.id
  },
  'jaque11 is malty': {
    beer_id: beers.jaque11.id,
    tag_id: tags.malty.id
  },
  'jaque11 is hoppy': {
    beer_id: beers.jaque11.id,
    tag_id: tags.hoppy.id
  },
  'jaque12 is crisp': {
    beer_id: beers.jaque12.id,
    tag_id: tags.crisp.id
  },
  'jaque12 is clean': {
    beer_id: beers.jaque12.id,
    tag_id: tags.clean.id
  },
  'jaque13 is sour': {
    beer_id: beers.jaque13.id,
    tag_id: tags.sour.id
  },
  'jaque13 is fruity': {
    beer_id: beers.jaque13.id,
    tag_id: tags.fruity.id
  },
  'jaque14 is crisp': {
    beer_id: beers.jaque14.id,
    tag_id: tags.crisp.id
  },
  'jaque14 is clean': {
    beer_id: beers.jaque14.id,
    tag_id: tags.clean.id
  },
  'jaque15 is light': {
    beer_id: beers.jaque15.id,
    tag_id: tags.light.id
  },
  'jaque15 is dry': {
    beer_id: beers.jaque15.id,
    tag_id: tags.dry.id
  }
}));

const carts = seed(Cart, ({ beers, users }) => ({
  godsCart: {
    quantity: 1,
    beer_id: beers.jaque.id,
    user_id: users.god.id
  },
  godsCart2: {
    quantity: 3,
    beer_id: beers.jaque2.id,
    user_id: users.god.id
  },
  godsCart3: {
    quantity: 5,
    beer_id: beers.jaque3.id,
    user_id: users.god.id
  },
  godsCart4: {
    quantity: 2,
    beer_id: beers.jaque4.id,
    user_id: users.god.id
  },
  godsCart5: {
    quantity: 2,
    beer_id: beers.jaque5.id,
    user_id: users.barack.id
  },
  godsCart6: {
    quantity: 4,
    beer_id: beers.jaque6.id,
    user_id: users.barack.id
  },
  godsCart7: {
    quantity: 1,
    beer_id: beers.jaque7.id,
    user_id: users.barack.id
  },
  godsCart8: {
    quantity: 1,
    beer_id: beers.jaque8.id,
    user_id: users.barack.id
  },
  godsCart9: {
    quantity: 3,
    beer_id: beers.jaque9.id,
    user_id: users.barack.id
  },
  godsCart10: {
    quantity: 8,
    beer_id: beers.jaque10.id,
    user_id: users.barack.id
  },
  godsCart11: {
    quantity: 3,
    beer_id: beers.jaque11.id,
    user_id: users.barack.id
  },
  godsCart12: {
    quantity: 4,
    beer_id: beers.jaque12.id,
    user_id: users.barack.id
  }
}));

const tags = seed(Tag, {
  crisp: {
    name: 'crisp'
  },
  hoppy: {
    name: 'hoppy'
  },
  malty: {
    name: 'malty'
  },
  roasty: {
    name: 'roasty'
  },
  smokey: {
    name: 'smokey'
  },
  fruity: {
    name: 'fruity'
  },
  spicy: {
    name: 'spicy'
  },
  tart: {
    name: 'tart'
  },
  dry: {
    name: 'dry'
  },
  clean: {
    name: 'clean'
  },
  sour: {
    name: 'sour'
  },
  sweet: {
    name: 'sweet'
  },
  light: {
    name: 'light'
  },
  dark: {
    name: 'dark'
  },
  heavy: {
    name: 'heavy'
  },
  bitter: {
    name: 'bitter'
  }
});

const parentCompany = seed(ParentCompany, {
  fox: {
    name: 'Foxhole Beer Company'
  },
  journey: {
    name: 'Journeymen Brewery'
  },
  bay: {
    name: 'Bay Ridge Brewing Company'
  },
  carp: {
    name: 'Carpal Tunnel Vision Brewery'
  }
});

const users = seed(User, ({ carts }) => ({
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234'
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  }
}));

const beers = seed(Beer, ({ tags, carts, parentCompany }) => ({
  jaque: {
    name: 'Voodoo',
    price: 6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate suscipit maxime dolorem, tenetur iure vero amet cum reiciendis sit consequuntur neque voluptatem eos ducimus labore veniam. Repellendus nemo laudantium perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore amet ratione at expedita voluptatem magnam provident, similique animi. Quae natus atque maxime! Perspiciatis cupiditate inventore cumque, maiores atque, consequatur qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci veniam ab numquam, eaque nostrum aperiam, fuga modi saepe animi aliquam, a necessitatibus quis? Expedita incidunt facilis tempore ad, accusamus!',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2017/07/TRB_voodoo_render.png',
    ibu: 43,
    abv: 5.1,
    beerType: 'Pale Ale',
    beerSubType: 'American Pale Ale',
    country: 'USA',
    parent_company_id: parentCompany.fox.id
  },
  jaque2: {
    name: 'Splinter Cat',
    price: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, rerum eum, qui, doloribus porro facere consequatur voluptate ea veritatis nemo dolores sequi numquam eveniet nisi aliquid rem ut corporis quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi odit veritatis rem hic dicta nam numquam odio ducimus aperiam doloribus deserunt atque, vero cum nisi ipsa sint molestias, earum voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error id expedita, repellendus unde exercitationem. Repellat dolor aliquam, consequuntur laudantium ex harum, eveniet, cumque nostrum sed magnam hic veniam neque.',
    inventory: 20,
    imageURL:
      'http://www.ohbeautifulbeer.com/wp-content/uploads/2017/06/SplinterCat-can-768x823.jpg',
    ibu: 76,
    abv: 5.6,
    beerType: 'Pale Ale',
    beerSubType: 'IPA',
    country: 'USA',
    parent_company_id: parentCompany.journey.id
  },
  jaque3: {
    name: 'Creature Comforts',
    price: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates neque dolor hic illum illo molestias molestiae ipsa sapiente ea, vitae nam, vel nobis esse dolorum perferendis, labore placeat soluta at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ab quis iusto, neque laudantium eligendi dolores, doloremque debitis similique dignissimos. Alias, perspiciatis quasi fuga voluptates sunt praesentium deserunt labore accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit fugiat iste sit qui voluptates. Aperiam cumque commodi, quia nulla asperiores hic pariatur nemo impedit minus consequatur assumenda, dolores harum omnis.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2017/05/COSMIK-DEBRIS-7.png',
    ibu: 63,
    abv: 6.1,
    beerType: 'Pale Ale',
    beerSubType: 'IPA',
    country: 'USA',
    parent_company_id: parentCompany.bay.id
  },
  jaque4: {
    name: 'Vienna Lager',
    price: 8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur suscipit praesentium eaque, esse libero vel eligendi deleniti asperiores cumque laboriosam, deserunt labore ea ad quae sit odit aperiam. Recusandae, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis illo maxime dicta quod porro saepe, mollitia, quae et quis consequuntur necessitatibus eaque nihil numquam itaque, corrupti sapiente sunt beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quibusdam velit a iusto excepturi numquam. Quae eum facere quas, quos, soluta eveniet. Rerum totam quam, hic, modi porro ad unde.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2017/03/can-vienna.png',
    ibu: 30,
    abv: 4.1,
    beerType: 'Lager',
    beerSubType: 'Red Lager',
    country: 'Vienna',
    parent_company_id: parentCompany.carp.id
  },
  jaque5: {
    name: 'Bronx Banner',
    price: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eveniet tenetur dolorem temporibus, at suscipit, dignissimos facere, nesciunt cumque natus nihil nobis eius adipisci asperiores. Esse natus suscipit placeat delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut minus dolorum ea atque porro aliquid facilis vel deserunt consequatur harum debitis, est quis? Reiciendis, sunt optio! Commodi, ipsum, sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto perspiciatis, similique asperiores inventore, sed nisi aspernatur quas. Dolore aspernatur, voluptas eveniet omnis aperiam atque assumenda, asperiores, minima, labore hic mollitia.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2017/02/bronx-can-768x813.jpg',
    ibu: 65,
    abv: 4.7,
    beerType: 'Ale',
    beerSubType: 'Golden Ale',
    country: 'USA',
    parent_company_id: parentCompany.fox.id
  },
  jaque6: {
    name: 'Liska',
    price: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quaerat, tenetur officiis animi iste. Asperiores autem laboriosam delectus possimus adipisci molestiae quas, recusandae tenetur magnam veritatis quaerat suscipit eius iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam placeat ullam obcaecati eius nam, illum quos deleniti tempore ab reprehenderit quasi ipsum harum a nobis voluptatibus, voluptatem omnis. Minima, amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore veritatis saepe cumque necessitatibus aliquid optio, inventore dolorem, voluptatem eos cum veniam, dolores provident laboriosam, maiores neque reiciendis eligendi maxime doloribus.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/11/charnwood.jpg',
    ibu: 31,
    abv: 3.7,
    beerType: 'Ale',
    beerSubType: 'Blonde Ale',
    country: 'Estonia',
    parent_company_id: parentCompany.journey.id
  },
  jaque7: {
    name: 'Snow Shovel',
    price: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel amet, iusto iste, maxime perferendis, dolore illum ab dolorem dolorum consequuntur tempora numquam sapiente accusantium minus, vero nesciunt repellat id sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore vel necessitatibus pariatur quibusdam magnam voluptatum vitae quod, aut, unde facilis ea deleniti doloremque? Unde adipisci deserunt, tempora in sed libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus expedita, impedit tempore atque reiciendis voluptatem, facilis ad labore aspernatur omnis officiis perferendis voluptate minima magni tenetur, inventore, eveniet cupiditate aperiam?',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/11/braxton-snowshovel.jpg',
    ibu: 41,
    abv: 5.7,
    beerType: 'Ale',
    beerSubType: 'Cream Ale',
    country: 'USA',
    parent_company_id: parentCompany.bay.id
  },
  jaque8: {
    name: 'Grand Cru',
    price: 9,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eveniet animi, totam cumque explicabo illo perspiciatis sequi dolor incidunt repudiandae in sed recusandae esse rerum, autem natus accusamus sapiente praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nam eos fuga natus corrupti veritatis modi quo libero autem enim non voluptatibus, est cumque illum dolores alias iusto dolorum asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat obcaecati tempore laboriosam repudiandae, labore aliquid assumenda ullam pariatur cumque eum dolores asperiores, soluta inventore. Minus libero hic, dolorum cum rem.',
    inventory: 20,
    imageURL:
      'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/10/Grand-Cru-Chad-Michael-Studio3-768x597.jpg',
    ibu: 37,
    abv: 3.9,
    beerType: 'Ale',
    beerSubType: 'Amber Ale',
    country: 'Lithuania',
    parent_company_id: parentCompany.carp.id
  },
  jaque9: {
    name: 'Oktober Fuel',
    price: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis aut, odit fuga atque tenetur vero magni nam, dignissimos odio perferendis quod assumenda nostrum minus. Debitis at cumque, totam sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab, recusandae enim quos corporis totam suscipit vitae, neque laudantium pariatur delectus sed harum porro quo odio ex. Illo, vero ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sequi id, debitis dolor quod velit facilis, obcaecati nisi quia, dolorem soluta. Ipsum accusantium molestiae incidunt omnis suscipit, impedit est non.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/10/3up_Rendering_White.png',
    ibu: 20,
    abv: 6,
    beerType: 'Lager',
    beerSubType: 'Oktoberfest',
    country: 'Canada',
    parent_company_id: parentCompany.fox.id
  },
  jaque10: {
    name: 'Burst',
    price: 7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum libero dicta itaque, incidunt, iusto, laudantium cumque quas in inventore accusamus perspiciatis? Repudiandae nesciunt odio mollitia, ullam eum soluta laboriosam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vero, ut vel quo dolores fugit! Accusantium consequatur, cupiditate ipsam impedit delectus possimus velit libero veniam omnis, dolor quas quasi non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure sequi veniam rerum fugiat facere officiis maxime dolorum incidunt ad voluptas velit eum, a exercitationem deleniti, provident qui, nulla adipisci.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/09/browns-burst.jpg',
    ibu: 54,
    abv: 4.3,
    beerType: 'Pale Ale',
    beerSubType: 'IPA',
    country: 'USA',
    parent_company_id: parentCompany.journey.id
  },
  jaque11: {
    name: 'Aurgoumentoux',
    price: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut, sequi inventore fuga error architecto, amet debitis enim eius officiis! Autem earum deserunt provident. Quas praesentium, nesciunt cupiditate in voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio labore ad ab cum odio, eius iusto incidunt eveniet eligendi, iste consequatur. Saepe voluptatibus quisquam distinctio nobis autem, animi veritatis aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatum, architecto cupiditate laudantium inventore odio corporis eum dolorem ex, neque optio excepturi, delectus dicta pariatur quae deserunt laborum culpa quasi.',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/08/abw-768x768.jpg',
    ibu: 27,
    abv: 4.8,
    beerType: 'Lager',
    beerSubType: 'Watery Lager',
    country: 'France',
    parent_company_id: parentCompany.bay.id
  },
  jaque12: {
    name: 'Kino',
    price: 8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sunt laudantium vel ea recusandae consectetur, minima, hic est magnam nesciunt blanditiis ut molestiae maiores veniam impedit natus commodi illo, possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam explicabo voluptates blanditiis quae, odit placeat ab corrupti ipsa suscipit officiis architecto, a excepturi, ipsam sed necessitatibus animi consequuntur! Eaque, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate voluptate atque doloremque nemo nobis quae neque fuga temporibus consectetur, quisquam accusantium at, sint quos voluptates harum ipsam et laudantium?',
    inventory: 20,
    imageURL:
      'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/08/AMERICAN_BEAUTY_1-768x933.jpg',
    ibu: 43,
    abv: 4.9,
    beerType: 'Stout',
    beerSubType: 'Milk Stout',
    country: 'Austria',
    parent_company_id: parentCompany.carp.id
  },
  jaque13: {
    name: 'Big Swell',
    price: 8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sapiente repellat adipisci, voluptas ad asperiores magni, reprehenderit ullam quos quae aperiam recusandae voluptatum porro tempora sit laborum laboriosam. Distinctio, harum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga illum adipisci. Quam doloremque, consectetur eligendi perspiciatis quasi dignissimos asperiores esse, nulla quae sed, similique voluptates ad incidunt accusantium quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores blanditiis earum cupiditate officia obcaecati fuga nemo recusandae nobis vel voluptates, neque harum. Adipisci magni, ullam! Recusandae molestiae id nam inventore.',
    inventory: 20,
    imageURL:
      'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/07/Bbros_MBC_Big_Swell_Can-940x529@2x-768x768.jpg',
    ibu: 34,
    abv: 5.3,
    beerType: 'Ale',
    beerSubType: 'Sour Ale',
    country: 'Belgium',
    parent_company_id: parentCompany.carp.id
  },
  jaque14: {
    name: 'La Patriota',
    price: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa assumenda tempora quidem accusamus iusto ab consequatur necessitatibus iure laboriosam et possimus amet quaerat, perferendis incidunt natus aliquam id cumque architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error illo ab omnis incidunt reprehenderit debitis quia sequi natus quod. Numquam, aperiam laboriosam odit accusamus ipsa provident porro quos aut iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus necessitatibus modi, rerum dolorum! Enim reiciendis, voluptates quidem obcaecati, ad quam labore optio, itaque quisquam porro dolorem ex nesciunt ipsum quod!',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/08/candelaria_sed.jpg',
    ibu: 62,
    abv: 5.8,
    beerType: 'Lager',
    beerSubType: 'Bock',
    country: 'Mexico',
    parent_company_id: parentCompany.fox.id
  },
  jaque15: {
    name: "Brew's Banner",
    price: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et in modi ab repudiandae, eaque iure est ipsam impedit laboriosam nesciunt, consequatur deserunt vitae suscipit amet rerum beatae nobis tempora officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab non, placeat voluptatibus sequi. Amet quasi rem ab magni saepe debitis corporis maiores, esse repellat voluptas voluptate accusamus iure itaque facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit esse expedita iste, obcaecati unde. Repudiandae voluptas minima aliquid unde quidem quae, atque assumenda quia! Veritatis ullam commodi dolore ut ex!',
    inventory: 20,
    imageURL: 'http://www.ohbeautifulbeer.com/wp-content/uploads/2016/07/CBC_BB_Label-Detail_1.jpg',
    ibu: 45,
    abv: 4.8,
    beerType: 'Pale Ale',
    beerSubType: 'IPA',
    country: 'USA',
    parent_company_id: parentCompany.journey.id
  }
}));

const things = seed(Thing, {
  surfing: { name: 'surfing' },
  smiting: { name: 'smiting' },
  puppies: { name: 'puppies' }
});

const favorites = seed(
  Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({ users, things }) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id, // users.barack is an instance of the User model
      // that we created in the user seed above.
      // The seed function wires the promises so that it'll
      // have been created already.
      thing_id: things.surfing.id // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    }
  })
);

if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0));
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error);
    this.cause = error;
    this.row = row;
    this.key = key;
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`;
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(
          others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other
        )
      ).then(rows);
    }

    return Promise.resolve(rows)
      .then(rows =>
        Promise.props(
          Object.keys(rows)
            .map(key => {
              const row = rows[key];
              return {
                key,
                value: Promise.props(row).then(row =>
                  Model.create(row).catch(error => {
                    throw new BadRow(key, row, error);
                  })
                )
              };
            })
            .reduce((all, one) => Object.assign({}, all, { [one.key]: one.value }), {})
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`);
        return seeded;
      })
      .catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`);
      });
  };
}

module.exports = Object.assign(seed, { users, things, favorites });
