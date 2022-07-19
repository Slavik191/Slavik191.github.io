---
title: Lido on Ethereum Scorecard
description: Keep track of the latest updates on how Lido is performing against
  its goal of being decentralized, trustless, governance-minimized and
  ethos-aligned with the Ethereum community.
---
Lido started with a mission to keep Ethereum decentralized and to democratize access to staking on the Beacon Chain.

While the protocol specification and related technologies evolve, Lido continues to drive towards its vision of a trustless, governance-minimized, and ethos aligned liquid staking protocol.

The scorecard below shows how we are doing. We invite input and feedback from the Ethereum community to keep track along the way on our [research forum](https://research.lido.fi).

## Where we’re already succeeding

While these attributes will remain under review, we assess Lido's performance to be 'Good'. We welcome community feedback on the attributes and how they are scored on our Research Forum.

| Scorecard Attribute  | Category  | Self-Assessment | Comments  |
|:--- |---|---|:--- |
|   Legally and physically unrelated| Validator set  | Good  |   |
|  Operators run their own nodes (no white-labeling) | Validator set  | Good  |   |
|  Good performance |  Validator set |  Good |   |
|  Operators should earn well enough to build a profitable, dependable business on staking | Validator set  | Good  |   |
|  Lido’s hostile takeover via a hard fork is possible |  Security | Good  |  As discussed in our [The Next Chapter for Lido](https://blog.lido.fi/the-next-chapter-for-lido/) article, as a very last resort (in the case of governance capture) we have made it trivial for Ethereum core developers to revoke Lido’s current permissions and transfer them to a community-owned contract. |
|  Lido can’t change validator set at will |  Governance |  Good | Lido currently only has soft power over its Node Operators. Withdrawals and triggerable exits will change this balance, but at the same time permissionless elements will be added to the validator set.  |

## Where we’re doing well, but can improve

These attributes are more of a grey area with identified areas for improvement noted in the comments.

| Scorecard Attribute  | Category  | Self-Assessment | Comments  |
|:--- |---|---|:--- |
|   No operators with over 1% of total stake of Ethereum through Lido | Validator set  | Okey  | A few operators between 1% and 2%
|  Operators run their own nodes (no white-labeling) | Validator set  | Okey  |  Overreliant on Europe and USA |
|  Distributed geographically and jurisdictionally |  Validator set |  Okey |  Not enough on-premise infra setups |
|  Best practices in security and key management |  Validator set |  Okey |  Validator set |
|  Client Diversity |  Validator set |  Okey | Prysm is not the dominant client in Lido (>58% minority client usage), but share of smaller clients could be higher. Additionally, more work to be done on Execution Layer client diversification.  |
|  Lido’s smart contracts have the best security possible |  Security |  Okey |  Thorough and multiple audits are undertaken on all smart contract upgrades, but no formal verification or symbolic execution based tests |
|  Withdrawals are non-custodial and trustless |  Security |  Okey |  Lido validators until [July 2021 were created with threshold signature BLS withdrawal credentials](https://blog.lido.fi/withdrawal-credentials-in-lido/); as of July 2021, Lido validators are on smart contract withdrawal credentials. The percentage of all Lido validators with [threshold BLS withdrawal credentials is ~15%](https://dune.com/queries/96764/193960) and steadily decreasing as new validators are added. Lido intends on rotating these validators to 0x01 (smart contract) withdrawal credentials as soon as possible, i.e. with the [Capella Hardfork](https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md). The current Lido withdrawal smart contract is a stub, and will be upgraded to a fully-functioning withdrawal contract once the withdrawal specs are finalized.|

## Needs Improvement

These attributes clearly need work and Lido is actively working on solutions and improvements. We welcome input from the DAO, our partners and the wider community as we seek solutions

| Scorecard Attribute  | Category  | Self-Assessment | Comments  |
|:--- |---|---|:--- |
|   Lido governance has significant safeguards | Governance | Needs improvments | Currently, the Aragon votes are two-phased. The first phase is regular vote, and the second one is time-lock with objections, during which LDO holders can only vote 'against' or change their vote from 'for' to 'against'.
|  There’s a robust set of Lido governance delegates| Governance  | Needs improvments  |  Lido DAO currently has vote delegation for Snapshot votes; however, the delegate set is limited and significant amount of voting power is undelegated and dormant. 
|  Delegation is enabled in onchain Lido governance |  Governance |  Needs improvments |  Currently, delegation is only enabled for Snapshot votes. Lido is actively researching possible mechanics for onchain delegation. |
|  There's a way for new operators to enter the set and prove themselves |  Validator market |  Needs improvments |  Lido is actively researching ways to allow permissionless operators to join its validator set, including working with SSV Network and Obol on DVT, as well as exploring ways for solo stakers to participate in the protocol. |
|  There's a way to reduce stake to operators who do not conform to Lido standards | Validator market  |  Needs improvments |  Lido is working on stake (re-)allocation mechanisms based on performance and off-chain attributes, as well as developing and lobbying for solutions to allow for penalizing malicious actors (e.g. [triggerable exits](https://ethresear.ch/t/withdrawal-credentials-exits-based-on-a-generalized-message-bus/12516)).|