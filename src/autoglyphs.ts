import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Generated,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/Autoglyphs/Autoglyphs"
import { Token, Owner } from "../generated/schema"

let ADDRESS_ZERO = Address.zero().toHex()

function getOrCreateOwner(ownerAddress: Bytes): void{
  let ownerId = ownerAddress.toHex()
  let owner = Owner.load(ownerId)
  if (!owner) {
    owner = new Owner(ownerId)
    owner.address = ownerAddress
  }
  owner.save()
}

function handleMint(to: Bytes, tokenId: string, timestamp: BigInt): void {
  getOrCreateOwner(to)
  let token = new Token(tokenId)
  token.mintedTimestamp = timestamp
  token.lastTransferTimestamp = timestamp
  token.owner = to.toHex()
  token.save()
}

function handleBurn(tokenId: string, timestamp: BigInt): void{
  handleRegularTransfer(Address.zero(), tokenId, timestamp)
}

function handleRegularTransfer(to: Bytes, tokenId: string, timestamp: BigInt): void {
  getOrCreateOwner(to)
  let token = Token.load(tokenId)

  if(!token) {
    return
  }
  token.lastTransferTimestamp = timestamp
  token.owner = to.toHex()
  token.save()
}

export function handleTransfer(event: Transfer): void {
  let from = event.params._from
	let to = event.params._to
	let tokenId = event.params._tokenId.toHex()
	let timestamp = event.block.timestamp

	if (from.toHex() == ADDRESS_ZERO) {
		handleMint(to, tokenId, timestamp)
	} else if (to.toHex() == ADDRESS_ZERO) {
		handleBurn(tokenId, timestamp)
	} else {
		handleRegularTransfer(to, tokenId, timestamp)
	}
}

export function handleGenerated(event: Generated): void {}
export function handleApproval(event: Approval): void {}
export function handleApprovalForAll(event: ApprovalForAll): void {}
