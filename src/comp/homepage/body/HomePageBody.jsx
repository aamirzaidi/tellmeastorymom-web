import React, { useState, useEffect } from "react";
import TopCarousel from "./Top carousel/TopCarousel";
import CategoryCarousels from "./Category Carousel/CategoryCarousel";
import db from "../../../firebase";
import { Link, useHistory } from "react-router-dom";
import add from "../../../images/add.png";
import Mark1 from "../../../images/mark1.png";
import Mark2 from "../../../images/mark2.png";
import Contribute from "../../../images/Contribute.png";
import LoadingIndicator from "../../LoadingIndicator";
import Mark4 from "../../../images/mark4.png";
import Mark5 from "../../../images/mark5.png";
import Mark6 from "../../../images/mark6.png";

function Body() {

   const [loading, setLoading] = useState(false);
   const [latestStories, setLatestStories] = useState([]);
   const [allStories, setAllStories] = useState([]);
   const [kindnessStories, setKindnessStories] = useState([]);
   const [MythologicalStories, setMythologicalStories] = useState([]);
   const [HonestyStories, setHonestyStories] = useState([]);
   const [IntelligenceStories, setIntelligenceStories] = useState([]);
   const [UnityStories, setUnityStories] = useState([]);
   const [HardWorkStories, setHardWorkStories] = useState([]);
   const [SuperstitiousStories, setSuperstitiousStories] = useState([]);
   const [GoodHabbitsStories, setGoodHabbitsStories] = useState([]);
   const [ChitChatStories, setChitChatStories] = useState([]);
   const [BuddhaStories, setBuddhaStories] = useState([]);
   const [TruthStories, setTruthStories] = useState([]);
   const [ThreeToSixYearsOldStories,setThreeToSixYearsOldStories] = useState([]);
   const [WisdomStories,setWisdomStories] = useState([]);
   const [CharacterStories,setCharacterStories] = useState([]);
   const [BraveryStories,setBraveryStories] = useState([]);
   const [KrishnaStories,setKrishnaStories] = useState([]);
   const [PanchatantraStories,setPanchatantraStories] = useState([]);
   const [Poems,setPoems] = useState([]);
   const [Pride,setPride] = useState([]);
   const [NeverTellLie,setNeverTellLie] = useState([]);
   const [LordGanesha,setLordGanesha] = useState([]);
   const [ChristmasStories,setChristmasStories] = useState([]);
   const [MummaMadeStories,setMummaMadeStories] = useState([]);
   const [SharingStories,setSharingStories] = useState([]);
   const [AlertStories,setAlertStories] = useState([]);
   const [ConfidenceStories,setConfidenceStories] = useState([]);
   const [DateStories,setDateStories] = useState([]);
   const [ZeroToThreeStories,setZeroToThreeStories] = useState([]);
   const [HoliStories,setHoliStories] = useState([]);
   const [FoolishnessStories,setFoolishnessStories] = useState([]);
   const [GreedStories,setGreedStories] = useState([]);
   const [HelpStories,setHelpStories] = useState([]);
   const [LazinessStories,setLazinessStories] = useState([]);
   const [ThoughtfulStories,setThoughtfulStories] = useState([]);
   const [FunnyStories,setFunnyStories] = useState([]);
   const [FriendsStories,setFriendsStories] = useState([]);
   const [PowerStories,setPowerStories] = useState([]);
   const [ClevernessStories,setClevernessStories] = useState([]); 
   const [SixToTwelveStories,setSixToTwelveStories] = useState([]); 


   async function getkindnessStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Kindness').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setKindnessStories(items);
      });
   }

   useEffect(() => {
      getkindnessStories();
   }, []);

   async function getMythologicalStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Mythological').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setMythologicalStories(items);
      });
   }

   useEffect(() => {
      getMythologicalStories();
   }, []);

   async function getHonestyStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Honesty').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setHonestyStories(items);
      });
   }

   useEffect(() => {
      getHonestyStories();
   }, []);
   async function getIntelligenceStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Intelligence').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setIntelligenceStories(items);
      });
   }

   useEffect(() => {
      getIntelligenceStories();
   }, []);

   async function getUnityStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Unity').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setUnityStories(items);
      });
   }

   useEffect(() => {
      getUnityStories();
   }, []);

   async function getHardWorkStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Hard work').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setHardWorkStories(items);
      });
   }

   useEffect(() => {
      getHardWorkStories();
   }, []);

   async function getSuperstitiousStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Superstitious').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setSuperstitiousStories(items);
      });
   }

   useEffect(() => {
      getSuperstitiousStories();
   }, []);

   async function getGoodHabbitsStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Good habits').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setGoodHabbitsStories(items);
      });
   }

   useEffect(() => {
      getGoodHabbitsStories();
   }, []);

   async function getChitChatStories() {
      await db.collection('Stories').where('related', 'array-contains', 'ChitChat').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setChitChatStories(items);
      });
   }

   useEffect(() => {
      getChitChatStories();
   }, []);

   async function getBuddhaStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Buddha').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setBuddhaStories(items);
      });
   }

   useEffect(() => {
      getBuddhaStories();
   }, []);

   async function getTruthStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Truth').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setTruthStories(items);
      });
   }

   useEffect(() => {
      getTruthStories();
   }, []);

   async function getThreeToSixYearsOldStories() {
      await db.collection('Stories').where('related', 'array-contains', '3-6 years old').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setThreeToSixYearsOldStories(items);
      });
   }

   useEffect(() => {
      getThreeToSixYearsOldStories();
   }, []);

   async function getCharacterStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Character').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setCharacterStories(items);
      });
   }

   useEffect(() => {
      getCharacterStories();
   }, []);

   async function getWisdomStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Wisdom').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setWisdomStories(items);
      });
   }

   useEffect(() => {
      getWisdomStories();
   }, []);

   async function getBraveryStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Bravery').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setBraveryStories(items);
      });
   }

   useEffect(() => {
      getBraveryStories();
   }, []);
   
   async function getKrishnaStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Krishna').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setKrishnaStories(items);
      });
   }

   useEffect(() => {
      getKrishnaStories();
   }, []);

   async function getPanchatantraStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Panchatantra').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setPanchatantraStories(items);
      });
   }
   useEffect(() => {
      getPanchatantraStories();
   }, []);
   async function getPoems() {
      await db.collection('Stories').where('related', 'array-contains', 'Poems').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setPoems(items);
      });
   }

   useEffect(() => {
      getPoems();
   }, []);

   async function getPride() {
      await db.collection('Stories').where('related', 'array-contains', 'Pride').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setPride(items);
      });
   }

   useEffect(() => {
      getPride();
   }, []);

   async function getNeverTellLie() {
      await db.collection('Stories').where('related', 'array-contains', 'Never tell lie').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setNeverTellLie(items);
      });
   }

   useEffect(() => {
      getNeverTellLie();
   }, []);

   async function getLordGanesha() {
      await db.collection('Stories').where('related', 'array-contains', 'Lord Ganesha').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setLordGanesha(items);
      });
   }

   useEffect(() => {
      getLordGanesha();
   }, []);

   async function getChristmasStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Christmas').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setChristmasStories(items);
      });
   }

   useEffect(() => {
      getChristmasStories();
   }, []);

   async function getMummaMadeStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Mumma made stories').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setMummaMadeStories(items);
      });
   }

   useEffect(() => {
      getMummaMadeStories();
   }, []);

   async function getSharingStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Sharing').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setSharingStories(items);
      });
   }

   useEffect(() => {
      getSharingStories();
   }, []);

   async function getAlertStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Alert').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setAlertStories(items);
      });
   }

   useEffect(() => {
      getAlertStories();
   }, []);

   async function getConfidenceStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Confidence').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setConfidenceStories(items);
      });
   }

   useEffect(() => {
      getConfidenceStories();
   }, []);

   async function getFoolishnessStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Foolishness').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setFoolishnessStories(items);
      });
   }

   useEffect(() => {
      getFoolishnessStories();
   }, []);

   async function getDateStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Date').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setDateStories(items);
      });
   }

   useEffect(() => {
      getDateStories();
   }, []);

   async function getHoliStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Holi festival').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setHoliStories(items);
      });
   }

   useEffect(() => {
      getHoliStories();
   }, []);

   async function getZeroToThreeStories() {
      await db.collection('Stories').where('related', 'array-contains', '0-3 years old').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setZeroToThreeStories(items);
      });
   }

   useEffect(() => {
      getZeroToThreeStories();
   }, []);

   async function getGreedStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Greed').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setGreedStories(items);
      });
   }

   useEffect(() => {
      getGreedStories();
   }, []);

   async function getHelpStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Help others').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setHelpStories(items);
      });
   }

   useEffect(() => {
      getHelpStories();
   }, []);

   async function getLazinessStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Laziness').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setLazinessStories(items);
      });
   }

   useEffect(() => {
      getLazinessStories();
   }, []);

   async function getThoughtfulStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Thoughtful').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setThoughtfulStories(items);
      });
   }

   useEffect(() => {
      getThoughtfulStories();
   }, []);

   async function getFunnyStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Funny').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setFunnyStories(items);
      });
   }

   useEffect(() => {
      getFunnyStories();
   }, []);

   async function getFriendsStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Friends').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setFriendsStories(items);
      });
   }

   useEffect(() => {
      getFriendsStories();
   }, []);

   async function getPowerStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Power').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setPowerStories(items);
      });
   }

   useEffect(() => {
      getPowerStories();
   }, []);

   async function getClevernessStories() {
      await db.collection('Stories').where('related', 'array-contains', 'Cleverness').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setClevernessStories(items);
      });
   }

   useEffect(() => {
      getClevernessStories();
   }, []);

   async function getSixToTwelveStories() {
      await db.collection('Stories').where('related', 'array-contains', '6-12 years old').limit(20).get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });
         setSixToTwelveStories(items);
      });
   }

   useEffect(() => {
      getSixToTwelveStories();
   }, []);

   async function getStoriesAndCategories() {
      setLoading(true);

      await db.collection('Stories').get().then((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((story) => {
            let storyData = story.data();
            storyData.id = story.id;
            items.push(storyData);
         });

         setAllStories(items);
      });

      setLoading(false);

   }

   function getLatestStories() {
      let stories = allStories;

      stories.sort(function (a, b) {
         let y1 = parseInt(a.posted.substring(16));
         let y2 = parseInt(b.posted.substring(16));
         let m1 = parseInt(a.posted.substring(13, 15));
         let m2 = parseInt(b.posted.substring(13, 15));
         let d1 = parseInt(a.posted.substring(10, 12));
         let d2 = parseInt(b.posted.substring(10, 12));

         if (y1 != y2) {
            return y2 - y1;
         } else if (m1 != m2) {
            return m2 - m1;
         } else {
            return d2 - d1;
         }
      });

      setLatestStories(stories.slice(0, 10));
   }

   useEffect(() => {
      getLatestStories();
   }, [allStories])

   useEffect(() => {
      getStoriesAndCategories();
   }, []);

   if (loading) {
      return (
         <LoadingIndicator />
      )
   }

   return (
      <div>
         <TopCarousel />
         <img className="responsive-image" src={Mark1} width="1400" />
         <CategoryCarousels
            categoryName="Latest Stories"
            storyObject={latestStories}
         />
         <Link to="/addStory">
            <center><img className="responsive-image" src={Contribute} alt="..." /></center>
         </Link>
         <CategoryCarousels
            categoryName="Kindness Stories"
            storyObject={kindnessStories}
         />
         <img className="responsive-image" src={Mark2} width="1400" />
         <CategoryCarousels
            categoryName="Mythological Stories"
            storyObject={MythologicalStories}
         />

         <CategoryCarousels
            categoryName="Honesty Stories"
            storyObject={HonestyStories}
         />
         <CategoryCarousels
            categoryName="Intelligence Stories"
            storyObject={IntelligenceStories}
         />
         <CategoryCarousels
            categoryName="Unity Stories"
            storyObject={UnityStories}
         />
          <img className="responsive-image" src={Mark4} width="1400" />
         <CategoryCarousels
            categoryName="Hardwork Stories"
            storyObject={HardWorkStories}
         />
         <CategoryCarousels
            categoryName="Superstitious Stories"
            storyObject={SuperstitiousStories}
         />
         <CategoryCarousels
            categoryName="ChitChat Stories"
            storyObject={ChitChatStories}
         />
          <img className="responsive-image" src={Mark5} width="1400" />
         <CategoryCarousels
            categoryName="Good Habbits Stories"
            storyObject={GoodHabbitsStories}
         />
         <CategoryCarousels
            categoryName="Buddha Stories"
            storyObject={BuddhaStories}
         />
         <CategoryCarousels
            categoryName="Truth Stories"
            storyObject={TruthStories}
         />
         <CategoryCarousels
            categoryName="3-6 years old Stories"
            storyObject={ThreeToSixYearsOldStories}
         />
         <CategoryCarousels
            categoryName="Wisdom Stories"
            storyObject={WisdomStories}
         />
         <CategoryCarousels
            categoryName="Character Stories"
            storyObject={CharacterStories}
         />
         <CategoryCarousels
            categoryName="Bravery Stories"
            storyObject={BraveryStories}
         />
         <CategoryCarousels
            categoryName="Krishna Stories"
            storyObject={KrishnaStories}
         />
          <img className="responsive-image" src={Mark6} width="1400" />
         <CategoryCarousels
            categoryName="Panchatantra Stories"
            storyObject={PanchatantraStories}
         />
         <CategoryCarousels
            categoryName="Poems"
            storyObject={Poems}
         />
         <CategoryCarousels
            categoryName="Pride Stories"
            storyObject={Pride}
         />
         <CategoryCarousels
            categoryName="Never Tell Lie Stories"
            storyObject={NeverTellLie}
         />
         <CategoryCarousels
            categoryName="Lord Ganesha Stories"
            storyObject={LordGanesha}
         />
          <CategoryCarousels
            categoryName="Christmas Stories"
            storyObject={ChristmasStories}
         />
          <CategoryCarousels
            categoryName="Mumma Made Stories"
            storyObject={MummaMadeStories}
         />
         <CategoryCarousels
            categoryName="Sharing Stories"
            storyObject={SharingStories}
         />
         <CategoryCarousels
            categoryName="Alert Stories"
            storyObject={AlertStories}
         />
         <CategoryCarousels
            categoryName="Confidence Stories"
            storyObject={ConfidenceStories}
         />
         <CategoryCarousels
            categoryName="0-3 years old Stories"
            storyObject={ZeroToThreeStories}
         />
         <CategoryCarousels
            categoryName="Holi Festival Stories"
            storyObject={HoliStories}
         />
         <CategoryCarousels
            categoryName="Date Stories"
            storyObject={DateStories}
         />
         <CategoryCarousels
            categoryName="Foolishness Stories"
            storyObject={FoolishnessStories}
         />
         <CategoryCarousels
            categoryName="Greed Stories"
            storyObject={GreedStories}
         />
         <CategoryCarousels
            categoryName="Help others Stories"
            storyObject={HelpStories}
         />
         <CategoryCarousels
            categoryName="Laziness Stories"
            storyObject={LazinessStories}
         />
         <CategoryCarousels
            categoryName="Thoughtful Stories"
            storyObject={ThoughtfulStories}
         />
         <CategoryCarousels
            categoryName="Funny Stories"
            storyObject={FunnyStories}
         />
         <CategoryCarousels
            categoryName="Friends Stories"
            storyObject={FriendsStories}
         />
         <CategoryCarousels
            categoryName="Power Stories"
            storyObject={PowerStories}
         />
         <CategoryCarousels
            categoryName="Cleverness Stories"
            storyObject={ClevernessStories}
         />
         <CategoryCarousels
            categoryName="6-12 years old Stories"
            storyObject={SixToTwelveStories}
         />
         <div className="d-box" style={{ alignItems: "center", paddingBottom: 20, paddingTop: 30 }} >
            <Link to="/exploreCategories"><h3><center>Explore More Categories👉</center></h3></Link></div>
         <div>
            <a href="https://play.google.com/store/apps/details?id=com.tellmeastorymom.tellmeastorymom">
               <center><img className="responsive-image" src={add} alt="..." /></center>
            </a>
         </div>
      </div>
   );
}

export default Body;