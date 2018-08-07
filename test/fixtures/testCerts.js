const testCerts = [
  {
    issuedOn: "2018-08-01",
    expiredOn: "2118-08-01",
    name: "Master of Blockchain",
    issuer: {
      name: "Blockchain Academy",
      did: "DID:SG-UEN:U18274928E",
      url: "https://blockchainacademy.com",
      email: "registrar@blockchainacademy.com",
      certificateStore: "0xd9580260be45c3c0c2fb259a82f219b513054012"
    },
    recipient: {
      name: "Mr Blockchain",
      did: "DID:SG-NRIC:S99999999A",
      email: "mr-blockchain@gmail.com",
      phone: 88888888
    },
    transcript: [
      {
        name: "Bitcoin",
        grade: "A+",
        courseCredit: 3,
        courseCode: "BTC-01",
        url: "https://blockchainacademy.com/subject/BTC-01",
        description: "Everything and more about bitcoin!"
      },
      {
        name: "Ethereum",
        grade: "A+",
        courseCredit: 3.5,
        courseCode: "ETH-01",
        url: "https://blockchainacademy.com/subject/ETH-01",
        description: "Everything and more about ethereum!"
      }
    ]
  },
  {
    issuedOn: "2018-08-01",
    expiredOn: "2118-08-01",
    name: "Master of Blockchain",
    issuer: {
      name: "Blockchain Academy",
      did: "DID:SG-UEN:U18274928E",
      url: "https://blockchainacademy.com",
      email: "registrar@blockchainacademy.com",
      certificateStore: "0xd9580260be45c3c0c2fb259a82f219b513054012"
    },
    recipient: {
      name: "Mrs Blockchain",
      did: "DID:SG-NRIC:S88888888B",
      email: "mrs-blockchain@gmail.com",
      phone: "81234567"
    },
    transcript: [
      {
        name: "Bitcoin",
        grade: "A+",
        courseCredit: 3,
        courseCode: "BTC-01",
        url: "https://blockchainacademy.com/subject/BTC-01",
        description: "Everything and more about bitcoin!"
      },
      {
        name: "Ethereum",
        grade: "A+",
        courseCredit: "3.5",
        courseCode: "ETH-01",
        url: "https://blockchainacademy.com/subject/ETH-01",
        description: "Everything and more about ethereum!"
      }
    ]
  }
];

module.exports = testCerts;
