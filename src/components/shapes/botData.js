import { atom } from "recoil";

const bot2 = atom({
  key: 'bot2',
  default: {
    bot_name: "testing",
    bot_length: "6",
    bot_id: "e21ef457-a919-4211-bcc4-3f9a818f51b1",
    levels: [
      {
        level: "L0",
        message_type: "mcq text",
        trigger_length: "2",
        position: {x: -91.5, y: -57},positionAbsolute: {x: -91.5, y: -57},
        trigger: [
          {
            auto: "yes",
            stack_holder: ["s1"],
            trigger: "t1",
            bot_id: "8d3699c8-07c2-4317-aef1-c86ab0f7659c",
          },
          {
            auto: "yes",
            stack_holder: ["s2"],
            trigger: "t2",
            bot_id: "afb07f9e-6b42-4cd9-a70f-982bf934bb3f",
          },
        ],
        content: {
          type: "text",
          header: 'None',
          text: 'None',
          caption: 'None',
          options: [
            { type: "text", title: "option0", postbackText: 'None' },
            { type: "text", title: "option1", postbackText: 'None' },
            { type: "text", title: "option2", postbackText: 'None' },
            { type: "text", title: "option3", postbackText: 'None' },
          ],
        },
      },
      {
        level: "L1",
        position: {x: 21.328172531672763, y: -92.11253614736108},
        message_type: "mcq video",
        trigger_length: "1",
        trigger: [
          {
            auto: "yes",
            stack_holder: ["s1", "s2", "s3"],
            trigger: "t1",
            bot_id: "feb9f6cb-33d2-43e4-9c79-32889d16daeb",
          },
        ],
        content: {
          type: "mcq video",
          url: 'None',
          text: 'None',
          caption: 'None',
          options: [
            { type: "text", title: "option0", postbackText: 'None' },
            { type: "text", title: "option1", postbackText: 'None' },
            { type: "text", title: "option2", postbackText: 'None' },
            { type: "text", title: "option3", postbackText: 'None' },
          ],
        },
      },
      {
        level: "L2",
        message_type: "video",
        trigger_length: "1",
        position: {x: 58.5, y: 103},positionAbsolute: {x: 58.5, y: 103},
        trigger: [
          {
            auto: "yes",
            stack_holder: ["s1"],
            trigger: "t1",
            bot_id: "feb9f6cb-33d2-43e4-9c79-32889d16daeb",
          },
        ],
        content: { url: 'None', caption: 'None' },
      },
      {
        level: "L3",
        message_type: "list",
        trigger_length: "1",
        position: {x: -108.5, y: 103.5},positionAbsolute: {x: -108.5, y: 103.5},
        trigger: [
          {
            auto: "yes",
            stack_holder: ["s1"],
            trigger: "t1",
            bot_id: "f567c83a-a58e-4574-b813-9040717f737c",
          },
        ],
        content: {
          list_length: "3",
          options: [
            { type: "text", title: "option0" },
            { type: "text", title: "option1" },
            { type: "text", title: "option2" },
          ],
        },
      },
      {
        level: "L4",
        message_type: "text",
        trigger_length: 'None',
        trigger: [],
        position: {x: 270.5, y: 103.5},positionAbsolute: {x: 270.5, y: 103.5},
        content: { text: 'None' },
      },
      {
        level: "L5",
        message_type: "location",
        trigger_length: "2",
        position: {x: 270.5, y: 103.5},positionAbsolute: {x: 270.5, y: 103.5},
        trigger: [
          {
            auto: "yes",
            stack_holder: ["s1"],
            trigger: "t1",
            bot_id: "8d3699c8-07c2-4317-aef1-c86ab0f7659c",
          },
          {
            auto: "yes",
            stack_holder: ["s3"],
            trigger: "t2",
            bot_id: "f567c83a-a58e-4574-b813-9040717f737c",
          },
        ],
        content: {
          city_name: 'None',
          address: 'None',
          longitude: 'None',
          latitude: 'None',
        },
      },
    ],
  },
});

const NEWBOT = atom({
  key: 'new',
  default: [
    { id: 'node-2', type: 'response', position: {x: 30, y: 50}, data: { value: 123, text: 'sdchgdvshgcvsd' } },
  ],
})
const newBotEdges = atom({
  key: 'newBotEdges',
  default: [{
    // id: '1', source: 'node-2', target: 'node-3', animated: false, type: 'step'
  }],
})

const EdgesId = atom({
    key: 'EdgesId',
    default:1
  })
const Dummy = atom({
  key: 'Dummy1',
  default:{
    "_id" : "642572947e7df84dc7f114f4",
    "class_length" : "3",
    "class_id" : "9088280e-e901-4751-9f6f-305207976794",
    "levels" : [
      {
        "level" : "L0",
        "content" : {
          "type" : "text",
          "text" : "would you like to elevate your society with us"
        },
        "is_trigger" : "yes",
        "trigger_length" : "1",
        "trigger" : [
          {
            "trigger_type" : "auto",
            "tigger_id" : "4d9fcae2-7319-44e0-8b04-c5fb4f39f19b"
          }
        ]
      },
      {
        "level" : "L1",
        "content" : {
          "type" : "quick_reply",
          "header" : null,
          "url" : "www.image.com",
          "filename" : null,
          "text" : "connect with us",
          "options" : [
            {
              "title" : "yes",
              "postbackText" : null
            },
            {
              "title" : "not sure",
              "postbackText" : null
            },
            {
              "title" : "skip",
              "postbackText" : null
            }
          ]
        },
        "is_trigger" : "no"
      },
      {
        "level" : "L2",
        "content" : {
          "type" : "file",
          "url" : "www.docs.com"
        },
        "is_trigger" : "yes",
        "trigger_length" : "2",
        "trigger" : [
          {
            "bot_id" : "7bb8eb81-e11f-4bf8-ad43-2b3b9c005035",
            "trigger_type" : "auto",
            "stake_holders" : null
          }
        ]
      },
      {
        "level" : "L3",
        "content" : {
          "type" : "file",
          "url" : "www.docs.com"
        },
        "is_trigger" : "yes",
        "trigger_length" : "2",
        "trigger" : [
          {
            "bot_id" : "7bb8eb81-e11f-4bf8-ad43-2b3b9c005035",
            "trigger_type" : "auto",
            "stake_holders" : null
          }
        ]
      },
      {
        "level" : "L4",
        "content" : {
          "type" : "file",
          "url" : "www.docs.com"
        },
        // // "is_trigger" : "yes",
        // // "trigger_length" : "2",
        // // "trigger" : [
        // //   {
        // //     "bot_id" : "7bb8eb81-e11f-4bf8-ad43-2b3b9c005035",
        // //     "trigger_type" : "auto",
        // //     "stake_holders" : null
        // //   }
        // ]
      }
    ],
    "bot_id" : "6beff537-85e5-486f-b372-dad017a51bd4",
    "bot_name" : "elevator.Otis11",
    "object_type" : "other",
    "bot_length" : "3"
  },
})
export {bot2,NEWBOT,newBotEdges,EdgesId,Dummy}
