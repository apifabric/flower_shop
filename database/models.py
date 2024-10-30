# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 14:27:35
# Database: sqlite:////tmp/tmp.pOI8YQGUUP/flower_shop/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table for recording customer details and information.
    """
    __tablename__ = 'customer'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="customer")
    OrderList : Mapped[List["Order"]] = relationship(back_populates="customer")



class Employee(SAFRSBaseX, Base):
    """
    description: Table recording flower shop employees.
    """
    __tablename__ = 'employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String)
    hire_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    WorkScheduleList : Mapped[List["WorkSchedule"]] = relationship(back_populates="employee")



class Flower(SAFRSBaseX, Base):
    """
    description: Table storing details of individual flower types available.
    """
    __tablename__ = 'flower'
    _s_collection_name = 'Flower'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    color = Column(String)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="flower")
    StockPurchaseList : Mapped[List["StockPurchase"]] = relationship(back_populates="flower")
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="flower")



class Promotion(SAFRSBaseX, Base):
    """
    description: Table for recording promotions applied to flower sales.
    """
    __tablename__ = 'promotion'
    _s_collection_name = 'Promotion'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String)
    discount_percent = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    OrderPromotionList : Mapped[List["OrderPromotion"]] = relationship(back_populates="promotion")



class Supplier(SAFRSBaseX, Base):
    """
    description: Table for details about suppliers who provide flowers.
    """
    __tablename__ = 'supplier'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_name = Column(String)
    contact_email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    StockPurchaseList : Mapped[List["StockPurchase"]] = relationship(back_populates="supplier")



class Feedback(SAFRSBaseX, Base):
    """
    description: Table collecting customer feedback on flowers or service.
    """
    __tablename__ = 'feedback'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    comments = Column(String)
    rating = Column(Integer)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Table representing the inventory stock of flowers in the shop.
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    flower_id = Column(ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    last_updated = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    flower : Mapped["Flower"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class Order(SAFRSBaseX, Base):
    """
    description: Table for storing customer orders in the system.
    """
    __tablename__ = 'order'
    _s_collection_name = 'Order'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'), nullable=False)
    order_date = Column(DateTime, nullable=False)
    total_amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("OrderList"))

    # child relationships (access children)
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="order")
    OrderPromotionList : Mapped[List["OrderPromotion"]] = relationship(back_populates="order")



class StockPurchase(SAFRSBaseX, Base):
    """
    description: Table for recording stock purchases from suppliers.
    """
    __tablename__ = 'stock_purchase'
    _s_collection_name = 'StockPurchase'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    supplier_id = Column(ForeignKey('supplier.id'), nullable=False)
    flower_id = Column(ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    purchase_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    flower : Mapped["Flower"] = relationship(back_populates=("StockPurchaseList"))
    supplier : Mapped["Supplier"] = relationship(back_populates=("StockPurchaseList"))

    # child relationships (access children)



class WorkSchedule(SAFRSBaseX, Base):
    """
    description: Table for managing employee work schedules.
    """
    __tablename__ = 'work_schedule'
    _s_collection_name = 'WorkSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("WorkScheduleList"))

    # child relationships (access children)



class OrderDetail(SAFRSBaseX, Base):
    """
    description: Junction table to capture individual flower items in orders.
    """
    __tablename__ = 'order_detail'
    _s_collection_name = 'OrderDetail'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('order.id'), nullable=False)
    flower_id = Column(ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    flower : Mapped["Flower"] = relationship(back_populates=("OrderDetailList"))
    order : Mapped["Order"] = relationship(back_populates=("OrderDetailList"))

    # child relationships (access children)



class OrderPromotion(SAFRSBaseX, Base):
    """
    description: Junction table linking promotions to specific orders.
    """
    __tablename__ = 'order_promotion'
    _s_collection_name = 'OrderPromotion'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('order.id'), nullable=False)
    promotion_id = Column(ForeignKey('promotion.id'), nullable=False)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("OrderPromotionList"))
    promotion : Mapped["Promotion"] = relationship(back_populates=("OrderPromotionList"))

    # child relationships (access children)
