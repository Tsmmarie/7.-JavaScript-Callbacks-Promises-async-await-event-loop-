// TASK_1
// ● setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა
// ● (მაგ: mySetTimeout(delay).then(...)


// function mySetTimeout(delay) {
//      return new Promise((resolve) => {
//          setTimeout(resolve, delay);
//      });
//  }
 
//  // გამოყენება:
//  mySetTimeout(2000).then(() => {
//      console.log("2 წამი გავიდა!");
//  });
 

//  TASK_2
//  გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:  სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)
// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
// დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია
// (გადაეცემა დინამიურად)

function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function makeToy(productionTime) {
    return mySetTimeout(productionTime).then(() => {
        console.log("სათამაშო დამზადდა!");
        return "Toy";
    });
}

function deliverToys(deliveryTime) {
    return mySetTimeout(deliveryTime).then(() => {
        console.log("სათამაშო მიეწოდა მომხმარებელს!");
    });
}

// პროცესის გაშვება
makeToy(3000)
    .then(() => deliverToys(2000))
    .then(() => console.log("პროცესი დასრულდა!"));

// TASK_3
//      სათამაშოს გაყიდვას სჭირდება 1 წამი 
//     (დინამიურად)
//     ● ყოველი მომდევნო ნაბიჯი უნდა
//     ელოდებოდეს წინა ნაბიჯის რეზულტატს და
//     შესაბამისად წყვეტდეს მოხდება თუ არა
//     მისი შესრულება
//     ● გამოიყენე .then().catch() და async/await
//     ● სინტაქსები. (2 ვარიანტი)

// ვარიანტი პირველი .then().catch() სინტაქსით

// function mySetTimeout(delay) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }

// function makeToy(productionTime) {
//     return mySetTimeout(productionTime).then(() => {
//         console.log("✅ სათამაშო დამზადდა!");
//         return "Toy";
//     });
// }

// function deliverToys(deliveryTime) {
//     return mySetTimeout(deliveryTime).then(() => {
//         console.log("🚚 სათამაშო მიეწოდა მომხმარებელს!");
//         return "Delivered Toy";
//     });
// }

// function sellToy(sellTime) {
//     return mySetTimeout(sellTime).then(() => {
//         console.log("💰 სათამაშო გაიყიდა!");
//         return "Sold Toy";
//     });
// }

// // პროცესი `.then().catch()` გამოყენებით
// makeToy(3000)
//     .then((toy) => {
//         if (toy) return deliverToys(2000);
//         throw new Error("❌ სათამაშო ვერ დამზადდა!");
//     })
//     .then((deliveredToy) => {
//         if (deliveredToy) return sellToy(1000);
//         throw new Error("❌ სათამაშო ვერ მიწოდდა!");
//     })
//     .then(() => {
//         console.log("🎉 პროცესი წარმატებით დასრულდა!");
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });


//ვარიანტი მეორე async/await სინტაქსით

async function toyShopProcess(productionTime, deliveryTime, sellTime) {
    try {
        await mySetTimeout(productionTime);
        console.log("✅ სათამაშო დამზადდა!");

        await mySetTimeout(deliveryTime);
        console.log("🚚 სათამაშო მიეწოდა მომხმარებელს!");

        await mySetTimeout(sellTime);
        console.log("💰 სათამაშო გაიყიდა!");

        console.log("🎉 პროცესი წარმატებით დასრულდა!");
    } catch (error) {
        console.error("❌ მოხდა შეცდომა:", error.message);
    }
}

// პროცესის გაშვება
toyShopProcess(3000, 2000, 1000);
