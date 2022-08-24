<script lang="ts">
	let selectedCoin: string | undefined = undefined;

	let supportedCoins: string[] = ['Bitcoin', 'Ethereum', 'Litcoin'];
</script>

<ul>
	{#each supportedCoins as supportedCoin, _}
		<button
			on:click={() => {
				selectedCoin = supportedCoin;
			}}>{supportedCoin}</button
		>
	{/each}
</ul>
