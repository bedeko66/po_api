DROP PROCEDURE IF EXISTS insert_item_into_foodProducts;

DELIMITER $$
CREATE PROCEDURE insert_item_into_foodProducts
(
p_Supplier VARCHAR(100),
p_Item_Group VARCHAR(100),
p_Category VARCHAR(100),
p_Bfs_Item TINYINT,
p_Item_Code VARCHAR(7),
p_Item_Description VARCHAR(62),
p_Size VARCHAR(16),
p_Unit_ptn DECIMAL(7,2),
p_Unit_mea VARCHAR(7),
p_CS VARCHAR(1),
p_Price DECIMAL(5,2)
)
BEGIN
	INSERT INTO Products_Brakes (`Supplier`,`Item_Group`,`Category`,`Bfs_Item`,`Item_Code`,`Item_Description`,`Size`,`Unit_ptn`,`Unit_mea`,`CS`,`Price`)
	VALUES (
		p_Supplier,
		p_Item_Group,
		p_Category,
		p_Bfs_Item,
		p_Item_Code,
		p_Item_Description,
		p_Size,
		p_Unit_ptn,
		p_Unit_mea,
		p_CS,
		p_Price
		);
END$$

DELIMITER ;