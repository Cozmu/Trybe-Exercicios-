def get_repeated(nums):
	see_before = set()
	repeated = set()

	for num in nums:
		if num in see_before:
			repeated.add(num)
		else:
			see_before.add(num)

	return repeated 


nums = [1, 6, 3, 9, 6, 6, 3, -1, 4, 5, 7, 1]

print(get_repeated(nums))